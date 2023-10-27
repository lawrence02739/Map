from mongodb.config import mongo, app, s3_client
from flask import jsonify

from bson import ObjectId
import os
import sys
import requests
from os import path
from os import getcwd
from flask_cors import CORS

import xml.etree.ElementTree as ET
import re
import copy
import fitz
import json
from bson.json_util import dumps
import threading
from threading import Thread
import datetime
from botocore.exceptions import ClientError
import time

from flask import render_template
import pdfkit
import unidecode
import itertools
# from nltk.stem import WordNetLemmatizer
from flask import request


import boto3
import pdfplumber
from io import BytesIO
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
import re
from dotenv import load_dotenv
import lz4.frame
import tempfile  

load_dotenv()

# cors = CORS(app, origins=['http://localhost:4200', 'http://www.boomfirepro.com/', 'http://ec2-54-87-246-44.compute-1.amazonaws.com/', 'http://boomfirepro.com/'])
cors = CORS(app, origins='*')

given_dictionary = []
actual_dictionary = {}
src_result = []
summary_list = []
summary = {}
requiredFont = ["HEOOYE+CourierNewPSMT","CourierNewPSMT","IEJJNG+Courier","EJHLGM+Courier","DOGKLG+Calibri"] # <-- Edit info
answers = ''
paragraph = []
sentences = []
src_pattern = re.compile(r"Q[0-9]{1,2}")  # <-- Matches Q1, Q2, ...etc
q_no_pattern = re.compile(r"\d{1,2}[.]")  # <-- Matches 1., 2., ...etc
file_name = ''
questionaire_pdf_results = []
category_list_item = []
global_pdf_id = None
global_user_id = None
workshop_Id = None
participant_Id = None
bucket = 'map-vfs-s3'
source_Folder = 'develop'
analyzed_json_url = ''
highlighted_pdf_url = ''
output_json = None
report_pdf_url = ''
hypenPattern = re.compile('\w+(?:-\w+)\S+')
slashPattern = re.compile('\w+(?:/\w+)\S+')

@app.route('/script/pdf/<objectid:pdf_id>/<objectid:user_id>', methods=['GET'])
def run_script(pdf_id, user_id):
    global global_pdf_id, global_user_id, questionaire_pdf_results, file_name, questionaire_pdf_results, category_list_item, answers, paragraph, sentences, given_dictionary, actual_dictionary, src_result, summary_list, summary, workshop_Id, participant_Id, analyzed_json_url, highlighted_pdf_url
    file_name = ''
    questionaire_pdf_results = []
    category_list_item = []
    answers = ''
    paragraph = []

    sentences = []
    given_dictionary = []
    actual_dictionary = {}
    src_result = []
    summary_list = []
    summary = {}

    workshop_Id = None
    participant_Id = None

    global_pdf_id = pdf_id
    global_user_id = user_id
    analyzed_json_url = ''
    highlighted_pdf_url = ''
    filterQuery = {'isActive': True, 'isDeleted': False}
    analyzeType = request.args.get('analyzeType')
    if 'type' in request.args:
        filterQuery['type'] = {'$in': request.args['type'].split(',')}
    
    # GET THE FORM DETIALS FROM THE DATABASE
    try:
        questionaire_pdf = mongo.db.questionaires.find_one(
            {'_id': global_pdf_id})
        pdf_url = questionaire_pdf['file']['url']

        workshop_Id = questionaire_pdf['workshop']
        participant_Id = questionaire_pdf['participant']

        questionaire_pdf_results = questionaire_pdf['results']
    except Exception as e:
        return "mongo get questionaires: " + str(e)

    try:
        categories = list(json.loads(
            dumps(mongo.db.categories.find(filterQuery).sort("sortOrder"))))
    except Exception as e:
        return "mongo categories: " + str(e)

    generate_given_dictionary(categories, analyzeType)
    # FILE FROM URL TO SAVE LOCAL FILE AND SEND TO FILL FORM
    questionaire_file_path = convert_url_to_local_file(pdf_url)
    analyzed_pdf_details = analyze_pdf(questionaire_file_path, analyzeType)

    return jsonify(analyzed_pdf_details)


def generate_given_dictionary(categories, analyzeType):
    global global_user_id, category_list_item
    
    for category in categories:
        given_dictionary_item = {}
        given_dictionary_item['category'] = category['type']
        if (category['type'] not in category_list_item):
            category_list_item.append(category['type'])
        given_dictionary_item['color_code'] = category['color']
        given_dictionary_item['synonyms'] = []
        given_dictionary_item['coding_Abbreviation'] = category['abbreviation']
        
        if analyzeType == 'all' or analyzeType == 'global':
            try:
                global_synonyms = json.loads(dumps(mongo.db.synonyms.find_one(
                    {'category': ObjectId(category['_id']['$oid']), 'type': 'global'})))
                given_dictionary_item['synonyms'] += global_synonyms['synonyms']

            except Exception as e:
                return "mongo global synonyms: " + str(e)

        if analyzeType == 'all' or analyzeType == 'your':
            if global_user_id:
                try:
                    your_synonyms = json.loads(dumps(mongo.db.synonyms.find_one(
                        {'category': ObjectId(category['_id']['$oid']), 'type': 'individual', 'userId': global_user_id})))
                    if your_synonyms != None:
                        given_dictionary_item['synonyms'] += your_synonyms['synonyms']
                except Exception as e:
                    return "mongo your synonyms: " + str(e)
        given_dictionary.append(given_dictionary_item)


def generate_result_pdf():
    global output_json, report_pdf_url

    with open(output_json) as f:
        data = json.load(f)
        overall_summary_data = data['overal_summary_by_category']
        templateData = []
        workshop_details = data['workshop_details']
        workshop_date_str_format = datetime.datetime.strptime(
            workshop_details['workshop_Date'], "%Y-%m-%dT%H:%M:%S")
        actual_workshop_date = workshop_date_str_format.strftime(
            "%A, %b %d %Y")
        workshop_details['workshop_Date'] = actual_workshop_date
        overal_summary_by_category = data['overal_summary_by_category']
        categories_data = []

        list_of_categories = []
        labels = []
        list_of_color_codes = []
        for code in overal_summary_by_category:
            categories_data_item = {}
            categories_data_item['coding_Abbreviation'] = code['coding_Abbreviation']
            categories_data_item['color_code'] = code['color_code']
            if (code['coding_Abbreviation'] not in categories_data):
                categories_data.append(categories_data_item)

        for element in overal_summary_by_category:
            value = element['category']
            summarData = data['summary']
            final_category_data = []
            for innerelement in summarData:
                innerValue = innerelement['mapped_category']
                for subelement in innerValue:
                    compareValue = subelement['category']
                    count = subelement['count']
                    if value == compareValue and count > 0:
                        finalObject = {}
                        finalObject['question_no'] = innerelement['question_no']
                        finalObject['source_key'] = innerelement['source_key']
                        finalObject['sentence'] = innerelement['sentence_annotated']
                        finalObject['scanned_synonyms'] = ''

                        for abbreviation in categories_data:
                            finalObject[abbreviation['coding_Abbreviation']] = ''

                        for code in overal_summary_by_category:

                            if code['category'] == compareValue and count > 0:
                                finalObject[code['coding_Abbreviation']] = 'X'

                                inner_next_value = innerelement['mapped_category']
                                for next_sub_element in inner_next_value:
                                    next_compare_value = next_sub_element['category']
                                    next_count = next_sub_element['count']

                                    if next_count > 0:
                                        findElement = find(lambda x: x.get(
                                            "category") == next_compare_value, overal_summary_by_category)
                                        finalObject[findElement['coding_Abbreviation']] = 'x'

                            if element['coding_Abbreviation'] == code['coding_Abbreviation']:
                                finalObject[code['coding_Abbreviation']] = 'Y'
                                find_scanned_synonyms_Element = find(lambda x: x.get(
                                    "coding_Abbreviation") == code['coding_Abbreviation'], overal_summary_by_category)
                                if find_scanned_synonyms_Element:
                                    for map_element in innerelement['mapped_category']:
                                        if find_scanned_synonyms_Element['category'] == map_element['category']:
                                            finalObject['scanned_synonyms'] = ','.join(
                                                map_element['mapped_words'])

                        final_category_data.append(finalObject)
            data_value = {}
            data_value['value'] = element['category']
            data_value['color_code'] = element['color_code']
            data_value['final_category_data'] = final_category_data
            data_value['coding_Abbreviation'] = element['coding_Abbreviation']
            data_value['final_category_data_length'] = len(final_category_data)

            list_of_categories.append(element['count'])
            labels.append(element['category'])
            list_of_color_codes.append(element['color_code'])
            current_date = (datetime.datetime.now()).strftime("%Y")

            templateData.append(data_value)

    rendered_template = render_template('template.html', overal_summary=overall_summary_data, templateData=templateData,
                                        workshop_data=workshop_details, colspan=len(categories_data), categories_data=categories_data,
                                        list_of_categories=list_of_categories, labels=labels, list_of_color_codes=list_of_color_codes, current_year=current_date)
    now = str(int(time.time()))
    output_result_pdf = 'result_' + file_name + '_'+now+'.pdf'
    pdfkit.from_string(rendered_template, output_result_pdf)
    result = upload_file(output_result_pdf, bucket,
                         source_Folder, 'report_pdf')
    if result['isSuccess'] == True:
        report_pdf_url = result['response_url']
        remove_files_in_local(output_result_pdf)

    return rendered_template


def find(pred, iterable):
    for element in iterable:
        if pred(element):
            return element
    return None


def analyze_pdf(questionaire_file_path, analyzeType):
    global questionaire_pdf_results, answers, given_dictionary, actual_dictionary, requiredFont, paragraph, sentences, src_result, file_name, highlighted_pdf_url, hypenPattern
    # Used PyMuPdf to open & read the pdf
    doc = fitz.open(questionaire_file_path)  # <-- Edit info
    get_total_no_of_pages = doc.pageCount

    sentence_words = []

    file_name = questionaire_file_path.split('.')[0]
    xml_file_path = file_name + '.xml'
    pdf2txt = 'api/src/pdf2txt.py'
    questionaire_pdf_file_path = questionaire_file_path
    cmd_line = "python3 " + pdf2txt + " -o " + xml_file_path + ' ' + questionaire_pdf_file_path

    # Converts the pdf into xml file
    os.system(cmd_line)

    # Reads the tree in the xml file
    tree = ET.parse(xml_file_path)

    root = tree.getroot()

    for idx, items in enumerate(given_dictionary):
        category = items['category']
        matchWords = items['synonyms']
        clone_match_words = matchWords
        for synonym_words in items['synonyms']:
            if synonym_words[0].isupper() == False:
                newUpperCaseWord = synonym_words.title()
                clone_match_words = clone_match_words + [newUpperCaseWord]
                
                isHypenated = hypenPattern.match(newUpperCaseWord)
                if not isHypenated:
                    split_check = newUpperCaseWord.split()
                    words_count = len(split_check)
                    if 2 <= words_count <= 3:
                        newHyphenatedWord = newUpperCaseWord.replace(' ', '-')
                        clone_match_words = clone_match_words + [newHyphenatedWord]
            else:
                lower_cased_word = synonym_words[0].lower() + synonym_words[1:]
                clone_match_words = clone_match_words + [lower_cased_word]
                isHypenated = hypenPattern.match(lower_cased_word)
                if not isHypenated:
                    split_check = lower_cased_word.split()
                    words_count = len(split_check)
                    if 2 <= words_count <= 3:
                        newHyphenatedWord = lower_cased_word.replace(' ', '-')
                        clone_match_words = clone_match_words + [newHyphenatedWord]
                
            isHypenated = hypenPattern.match(synonym_words)
            if not isHypenated:
                split_check = synonym_words.split()
                words_count = len(split_check)
                if 2 <= words_count <= 3:
                    newHyphenatedWord = synonym_words.replace(' ', '-')
                    clone_match_words = clone_match_words + [newHyphenatedWord]
                
        # for clone_idx, clone_items in enumerate(clone_match_words):
        #     clone_match_words[clone_idx] = ' ' + clone_items
        actual_dictionary[category] = clone_match_words
        given_dictionary[idx]['synonyms'] = clone_match_words

    matchedSentences = copy.copy(actual_dictionary)

    for category in matchedSentences:
        matchedSentences[category] = []

    # Split xml root with matching fonts into a list of paragraphs

    for pages in root:
        for textbox in pages:
            for textline in textbox:
                for text in textline:
                    fontPresent = text.get('font')
                    if fontPresent in requiredFont:
                        if(text.text == None):
                            text.text = " "
                        if answers[-1:] == '.':
                            answers = answers + ' '
                        answers = answers+text.text
            if answers[-1:] == ' ':
                answers = answers[:-1] + '.'
    paragraph.append(answers)

    # Split xml paragraph in to sentences

    for element in paragraph:
        # <-- Converts paragragh into sentences
        sentence_words += re.split(r"(?<=[.!?])\s+", element)

    # Get list of matched sentences

    for words in actual_dictionary:
        keywordsList = actual_dictionary[words]
        for keys in keywordsList:
            for lines in sentence_words:
                # lines = ' ' + lines
                isFound = lines.find(keys)
                if isFound != -1:
                    categories = matchedSentences[words]
                    checkIfexists = lines in categories
                    if checkIfexists == False:
                        matchedSentences[words].append(lines)

    # ITERATE OVER PAGES AND KEYWORDS
    for page_number in range(get_total_no_of_pages):
        current_page = doc[page_number]
        slashedWordsAnnotated = []
        page_text = current_page.getText("text")
        src_result = src_pattern.findall(page_text)
        if len(src_result) == 0:
            src_result = check_last_source(page_number, questionaire_file_path)
        for categories in matchedSentences:
            tobeHighlighted = matchedSentences[categories]

            for sentence in tobeHighlighted:
                blank_lines_split = page_text.split('\n \n')
                blank_lines_split = [x.replace('\n', '')
                                     for x in blank_lines_split]
                matching = [s for s in blank_lines_split if sentence in s]
                if(len(matching) == 0) and sentence[-1:] == '.':
                    remove_added_character = sentence[:-1]
                    matching = [
                        s for s in blank_lines_split if remove_added_character in s]
                    sentence = remove_added_character

                if(len(matching) > 0):
                    # for matched_paragraph in blank_lines_split:
                    match_q_no_result = q_no_pattern.findall(
                        matching[0])
                    if(len(match_q_no_result) > 1):
                        splitByQuestionNo =  re.findall('.*?\d{1,2}[.]', matching[0])
                        matching = [s for s in splitByQuestionNo if sentence in s]
                        if(len(matching) == 0) and sentence[-1:] == '.':
                            remove_added_character = sentence[:-1]
                            matching = [
                                s for s in splitByQuestionNo if remove_added_character in s]
                            sentence = remove_added_character
                        if(len(matching) > 0):
                            matchingIndex = splitByQuestionNo.index(matching[0])
                            match_q_no_result = q_no_pattern.findall(splitByQuestionNo[matchingIndex - 1])
                    if len(match_q_no_result) > 0:
                        q_no_result = match_q_no_result
                    if len(match_q_no_result) == 0:
                        matchedIndex = blank_lines_split.index(matching[0])
                        q_no_result = checkLastQno(blank_lines_split, matchedIndex, page_number, questionaire_file_path)
                    generate_required_data(q_no_result, sentence)

            givenCategory = next(
                item for item in given_dictionary if item['category'] == categories)
            searchText = givenCategory['synonyms']
            givenColor = givenCategory['color_code']

            givenColor = givenColor.lstrip('#')
            given_color = tuple(int(givenColor[i:i+2], 16) for i in (0, 2, 4))
            given_color = tuple(
                map(lambda ele: round(ele / 255, 1), given_color))

            # search_highlight(current_page, searchText, given_color)
            for word_items in searchText:
                extract_exact_words = current_page.getText("words")
                for current_index, word in enumerate(extract_exact_words):
                    matching_words_list = []
                    matching_words_list.append(word)
                    exact_word = word[4]
                    split_check = word_items.split()
                    words_count = len(split_check)
                    if words_count > 1:
                        for i in range(1, words_count):
                            next_index = current_index + i
                            if next_index < len(extract_exact_words):
                                exact_word = exact_word + ' ' + extract_exact_words[next_index][4]
                                matching_words_list.append(
                                    extract_exact_words[next_index])
                        # accepts only A-z, apostrophe('), dashes(-)
                        regexExtract = re.sub('[^A-z \'-]', '', exact_word)
                        if regexExtract == word_items:
                            byloc = lambda x: x[3]
                            new_list = [list(v) for k, v in itertools.groupby(
                                matching_words_list, key=byloc)]
                            for quads in new_list:
                                x0 = quads[0][0]
                                y0 = quads[0][1]
                                x1 = quads[len(quads) - 1][2]
                                y1 = quads[len(quads) - 1][3]
                                rectWord = fitz.Rect(x0, y0, x1, y1)
                                if rectWord.height > 10:
                                    highlight = current_page.addHighlightAnnot(
                                        rectWord)
                                    highlight.setColors(
                                        {"stroke": given_color})
                                    highlight.update()
                    else:
                        # accepts only A-z, apostrophe('), dashes(-)
                        regexExtract = re.sub('[^A-z \'-]', '', exact_word)
                        rect_word = fitz.Rect(
                            word[0], word[1], word[2], word[3])
                        isSlashed = slashPattern.match(exact_word)
                        if(regexExtract == word_items):
                            if rect_word.height > 10:
                                highlight = current_page.addHighlightAnnot(
                                    rect_word)
                                highlight.setColors({"stroke": given_color})
                                highlight.update()
                        elif isSlashed:
                            slashSplitted = exact_word.split('/')
                            for slashedWord in slashSplitted:
                                if word_items == slashedWord:
                                    text_instances = current_page.searchFor(slashedWord)
                                    for inst in text_instances:
                                        if inst.height > 10:
                                            x0Slashed = inst.x0
                                            y0Slashed = inst.y0
                                            x1Slashed = inst.x1
                                            y1Slashed = inst.y1
                                            if word[1] == y0Slashed and word[3] == y1Slashed:
                                                if word[0] <= x0Slashed < word[2] and word[0] < x1Slashed <= word[2]: 
                                                    if not inst in slashedWordsAnnotated:
                                                        slashedWordsAnnotated.append(inst)
                                                        highlight = current_page.addHighlightAnnot(inst)
                                                        highlight.setColors({"stroke": given_color})
                                                        highlight.update()
                                                
    generate_summary()
    now = str(int(time.time()))
    output_pdf = "output_" + file_name + '-' + now + '.pdf'
    doc.save(output_pdf, garbage=4, deflate=True, clean=True)
    doc.close()

    result = upload_file(output_pdf, bucket, source_Folder, 'highlighted_pdf')
    if result['isSuccess'] == True:
        highlighted_pdf_url = result['response_url']
        remove_files_in_local(output_pdf)

    result = update_questionaire_output_pdf(analyzeType)
    if os.path.exists(xml_file_path):
        os.remove(xml_file_path)
    else:
        print("The file does not exist")

    if os.path.exists(questionaire_file_path):
        os.remove(questionaire_file_path)
    else:
        print("The file does not exist")
    analyze_pdf_status = {}
    if result['updatedExisting'] == True:
        analyze_pdf_status['isSuccess'] = True
        analyze_pdf_status['message'] = 'Analyzed PDF Successfully'
    else:
        analyze_pdf_status = result

    return analyze_pdf_status


def generate_summary():
    global summary, file_name, analyzed_json_url, output_json

    summary['overall_summary_by_source'] = overal_summary_by_source()
    summary['overal_summary_by_category'] = overal_summary_by_category()
    summary['workshop_details'] = generate_workshop_details()

    json_object = json.dumps(summary, indent=4)
    now = str(int(time.time()))
    output_json = file_name + '-' + now + ".json"
    with open(output_json, "w") as out_file:
        out_file.write(json_object)
    generate_result_pdf()
    result = upload_file(output_json, bucket, source_Folder, 'analyzed_json')
    if result['isSuccess'] == True:
        analyzed_json_url = result['response_url']
        remove_files_in_local(output_json)


def generate_workshop_details():
    global workshop_Id, participant_Id
    generate_workshop_details_item = {}

    try:
        workshops = mongo.db.workshops.find_one(
            {'_id': workshop_Id})
        generate_workshop_details_item['workshop_Date'] = workshops['workshopDate'].isoformat(
        )
        workshop_Leader_id = workshops['conductedBy']
        try:
            user = mongo.db.users.find_one(
                {'_id': workshop_Leader_id})
            generate_workshop_details_item['workshop_Leader'] = user['fullName']
        except Exception as e:
            return "mongo users: " + str(e)
    except Exception as e:
        return "mongo workshops: " + str(e)

    try:
        participants = mongo.db.participants.find_one(
            {'_id': participant_Id})
        generate_workshop_details_item['workshop_Participant'] = participants['firstName'] + \
            ' ' + participants['lastName']
    except Exception as e:
        return "mongo participants: " + str(e)

    return generate_workshop_details_item


def overal_summary_by_category():
    global summary
    summary_list = summary['summary']
    overal_summary_by_category_list = []
    for items in given_dictionary:
        overal_summary_by_category_list_item = {}
        overal_summary_by_category_list_item['category'] = items['category']
        overal_summary_by_category_list_item['color_code'] = items['color_code']
        overal_summary_by_category_list_item['coding_Abbreviation'] = items['coding_Abbreviation']
        overal_summary_by_category_list_item['count'] = 0
        for summary_item in summary_list:
            for category in summary_item['mapped_category']:
                if category['category'] == items['category']:
                    overal_summary_by_category_list_item['count'] += category['count']
        overal_summary_by_category_list.append(
            overal_summary_by_category_list_item)
    return overal_summary_by_category_list


def overal_summary_by_source():
    global summary
    summary_list = summary['summary']
    overal_summary_by_source_list = []
    for summary_list_item in summary_list:
        overal_summary_by_source_list_item = {}
        if not any(d['source'] == summary_list_item['source_key'] for d in overal_summary_by_source_list):
            overal_summary_by_source_list_item['source'] = summary_list_item['source_key']
            overal_summary_by_source_list_item['count'] = 0
            overal_summary_by_source_list_item['count'] += get_count_of_source(
                summary_list_item)

            overal_summary_by_source_list.append(
                overal_summary_by_source_list_item)
        else:
            for summary_source_item in overal_summary_by_source_list:
                if summary_source_item['source'] == summary_list_item['source_key']:
                    summary_source_item['count'] += get_count_of_source(
                        summary_list_item)

    return overal_summary_by_source_list


def get_count_of_source(summary_list_item):
    count = 0
    for mapped_items in summary_list_item['mapped_category']:
        count += mapped_items['count']
    return count


def generate_required_data(q_no_result, sentence):
    global summary, src_result, given_dictionary
    question_no = q_no_result[0].split('.')[0]
    source_key = src_result[0]
    summary_item = {}
    summary_item['question_no'] = question_no
    summary_item['source_key'] = source_key
    sentence = unidecode.unidecode(sentence)

    annotated_sentence = sentence
    by_words = sentence.split()
    
    slashed = re.findall(r'\w+(?:/\w+)\S+', sentence)
    for slashedWord in slashed:
        by_words = by_words + slashedWord.split('/')
        
    for words in actual_dictionary:

        keywordsList = actual_dictionary[words]

        for key_words in keywordsList:
            for current_index, words_item in enumerate(by_words):
                # words_item = ' ' + words_item
                split_check = key_words.split()
                words_count = len(split_check)
                if words_count > 1:
                    for i in range(1, words_count):
                        next_index = current_index + i
                        if next_index < len(by_words):
                            words_item = words_item + ' ' + by_words[next_index]
                # accepts only A-z, apostrophe('), dashes(-)
                regex_Extract_words_item = re.sub('[^A-z \'-]', '', words_item)
                if regex_Extract_words_item == key_words:
                    # search_result = words_item.find(key_words)
                    # if(search_result != -1):
                    findElement = find(lambda x: x.get(
                        "category") == words, given_dictionary)
                    if findElement:
                        color_code = findElement['color_code']
                    replaced_string = '<font color="' + color_code + '">' + words_item + '</font>'

                    annotated_sentence = annotated_sentence.replace(
                        words_item, replaced_string)

    summary_item['sentence_annotated'] = annotated_sentence
    summary_item['sentence'] = sentence
    summary_item['mapped_category'] = generate_mapped_category_summary(
        summary_item)
    if not summary_item in summary_list:
        summary_list.append(summary_item)
        summary['summary'] = summary_list


# Generates mapped category summary


def generate_mapped_category_summary(summary_item):
    sentence_item = summary_item['sentence']
    by_words = sentence_item.split()
    
    slashed = re.findall(r'\w+(?:/\w+)\S+', sentence_item)
    for slashedWord in slashed:
        by_words = by_words + slashedWord.split('/')
        
    mapped_category_list = []
    for words in actual_dictionary:
        mapped_category_item = {}
        keywordsList = actual_dictionary[words]
        mapped_category_item['category'] = words
        mapped_words = []
        for key_words in keywordsList:
            for current_index, words_item in enumerate(by_words):
                # words_item = ' ' + words_item
                split_check = key_words.split()
                words_count = len(split_check)
                if words_count > 1:
                    for i in range(1, words_count):
                        next_index = current_index + i
                        if next_index < len(by_words):
                            words_item = words_item + ' ' + by_words[next_index]
                # accepts only A-z, apostrophe('), dashes(-)
                regex_Extract_words_item = re.sub('[^A-z \'-]', '', words_item)
                if regex_Extract_words_item == key_words:
                    # search_result = words_item.find(key_words)
                    # if(search_result != -1):
                    mapped_words.append(words_item)

        mapped_category_item['count'] = len(mapped_words)
        mapped_category_item['mapped_words'] = mapped_words
        mapped_category_list.append(mapped_category_item)
    return mapped_category_list

def checkLastQno(blank_lines_split, matchedIndex, page_number, questionaire_file_path):
    previousIndex = matchedIndex - 1
    if previousIndex > 0:
        previousItem = blank_lines_split[previousIndex]
        match_q_no_result = q_no_pattern.findall(previousItem)
        if len(match_q_no_result) == 0:
            matchedIndex = matchedIndex - 1
            match_q_no_result = checkLastQno(blank_lines_split, matchedIndex, page_number, questionaire_file_path)
            if len(match_q_no_result) > 0:
                return match_q_no_result
        else:
            return match_q_no_result
    else:
        doc = fitz.open(questionaire_file_path)
        previous_page_number = page_number - 1
        previous_page = doc[previous_page_number]
        previous_page_text = previous_page.getText("text")
        q_no_result = q_no_pattern.findall(previous_page_text)
        match_q_no_result = [q_no_result[len(q_no_result) - 1]]
        doc.close()
        return match_q_no_result
# Finds the source key in the previous pages
# if not available in the current page


def check_last_source(page_number, questionaire_file_path):
    doc = fitz.open(questionaire_file_path)
    previous_page_number = page_number - 1
    previous_page = doc[previous_page_number]
    previous_page_text = previous_page.getText("text")
    src_result = src_pattern.findall(previous_page_text)
    if len(src_result) == 0:
        page_number = page_number - 1
        src_result = check_last_source(page_number, questionaire_file_path)
        if len(src_result) > 0:
            doc.close()
            return src_result
    else:
        doc.close()
        return src_result

# Converts hex code to RGB format


def convert_hex_code_to_rgb(givenColor):
    givenColor = givenColor.lstrip('#')
    given_color = tuple(int(givenColor[i:i+2], 16) for i in (0, 2, 4))
    given_color = tuple(map(lambda ele: round(ele / 255, 1), given_color))
    return given_color


# Search pdf and highlight text instances

def search_highlight(current_page, searchText, given_color):
    for word in searchText:
        text_instances = current_page.searchFor(word)
        for inst in text_instances:
            if inst.height > 10:
                highlight = current_page.addHighlightAnnot(inst)
                highlight.setColors({"stroke": given_color})
                highlight.update()


def convert_url_to_local_file(url):
    # GET FILE FROM URL
    filename = url.split('/')[-1]
    try:
        fileFormUrl = requests.get(url, allow_redirects=True)
    except requests.exceptions.HTTPError as e:
        return "Error: " + str(e)
    open(filename, 'wb').write(fileFormUrl.content)
    return filename


def remove_files_in_local(filename):
    if path.isfile(filename):
        os.remove(filename)


def update_questionaire_output_pdf(analyzeType):
    global global_pdf_id, questionaire_pdf_results, analyzed_json_url, highlighted_pdf_url, report_pdf_url

    try:
        user = mongo.db.users.find_one({'_id': global_user_id})
    except Exception as e:
        return "mongo users: " + str(e)

    result_list_item = {}
    analyze_by = {}
    if user != None:
        analyze_by['user_name'] = user['fullName']
        analyze_by['user_id'] = str(global_user_id)

    result_list_item['analyze_by'] = analyze_by
    result_list_item['category_list'] = category_list_item
    if analyzeType == 'all':
        result_list_item['analyzeType'] = ['Global', 'Your']    
    else:
        result_list_item['analyzeType'] = [analyzeType.title()]    

    result_list_item['analyzed_date'] = datetime.datetime.now()
    result_list_item['analyzed_json'] = analyzed_json_url
    result_list_item['report_pdf'] = report_pdf_url
    result_list_item['highlight_pdf'] = highlighted_pdf_url
    questionaire_pdf_results.append(result_list_item)

    try:
        questionaires = mongo.db.questionaires.update({'_id': global_pdf_id}, {'$set': {"status": 'analyzed',
                                                                                        "results": questionaire_pdf_results}})
    except Exception as e:
        return "mongo update questionaires: " + str(e)
    return questionaires


def upload_file(file_name, bucket, source_Folder, folder):
    global s3_client
    response = {}
    object_name = '%s/%s/%s' % (source_Folder, folder, file_name)
    """Upload a file to an S3 bucket

    :param file_name: File to upload
    :param bucket: Bucket to upload to
    :param object_name: S3 object name. If not specified then file_name is used
    :return: True if file was uploaded, else False
    """

    # If S3 object_name was not specified, use file_name
    if object_name is None:
        object_name = file_name

    try:
        s3_client.upload_file(file_name, bucket, object_name,
                              ExtraArgs={'ACL': 'public-read'})
        response_url = 'https://'+'%s' % (bucket)+'.s3.amazonaws.com'+'/%s/%s/%s' % (
            source_Folder, folder, file_name)
        response['isSuccess'] = True
        response['response_url'] = response_url
    except ClientError as e:
        
        response['isSuccess'] = False
        response['message'] = "Upload failed: " + str(e)
        return response

    return response



@app.route('/pdf/test', methods=['GET'])
def test():
    return "API works"

OPENAI_API_KEY =os.getenv('OPENAI_API_KEY')
def upload_pdf(compress_pdf,pdf_name):
    begin = time.time()
    s3 = boto3.client('s3', region_name=os.getenv("Region_name"),
                      aws_access_key_id=os.getenv('Aws_access_key_id'),
                      aws_secret_access_key=os.getenv('Aws_secret_access_key'))

    bucket_name =os.getenv("Bucket_name")
    name =pdf_name
    uploaded_file='testing/template/'+name

    s3_data=s3.put_object(Body=compress_pdf,Bucket=bucket_name,Key=uploaded_file)
    time.sleep(1)
    # store end time
    end = time.time()
    # total time taken
    # print(f"upload pdf {end - begin}")
    return s3_data

def get_pdf_data(pdf_name):
    begin = time.time()
    s3 = boto3.client('s3', region_name=os.getenv("Region_name"),
                      aws_access_key_id=os.getenv('Aws_access_key_id'),
                      aws_secret_access_key=os.getenv('Aws_secret_access_key'))

    bucket_name =os.getenv("Bucket_name")
    
    # file_name = 'testing/360-Andrew Hancock.pdf'
    file_name ='testing/template/'+pdf_name
    


    response = s3.get_object(Bucket=bucket_name, Key=file_name)
    
    compressed_pdf_bytes = response['Body'].read()

    # Decompress the PDF
    pdf_bytes = lz4.frame.decompress(compressed_pdf_bytes)
    pdf_stream = BytesIO(pdf_bytes)

    with pdfplumber.open(pdf_stream) as pdf:
        text = ''
        for page in pdf.pages:
            text += page.extract_text()

    time.sleep(1)
    # store end time
    end = time.time()
    # total time taken
    # print(f"getpdf_data{end - begin}")
    return text

def get_text_chunks(text):
    begin = time.time()
    text_splitter = CharacterTextSplitter(
        separator="\n", chunk_size=1000, chunk_overlap=200, length_function=len
    )
    chunks = text_splitter.split_text(text)
    time.sleep(1)
    # store end time
    end = time.time()
    # total time taken
    # print(f"get_text_chunks {end - begin}")
    return chunks


def get_vectorstore(text_chunks):
    begin = time.time()
    embeddings = OpenAIEmbeddings()
    vectorstore = FAISS.from_texts(texts=text_chunks, embedding=embeddings)
    time.sleep(1)
    # store end time
    end = time.time()
    # total time taken
    # print(f"get_vectorstore {end - begin}")
    return vectorstore


def get_conversation_chain(vectorstore,user_question):
    begin = time.time()
    llm = ChatOpenAI()
    qa = RetrievalQA.from_chain_type(llm=llm,retriever=vectorstore.as_retriever(),chain_type='stuff',return_source_documents=False)
    qa({"query": user_question})
    print(qa.run(user_question))
    # print(qa.text())
    time.sleep(1)
    # store end time
    end = time.time()
    # total time taken
    # print(f"get_conversion {end - begin}")
    return qa.run(user_question)
def check():
    begin = time.time()
    s3=boto3.resource(
        service_name ='s3',region_name='us-east-1',aws_access_key_id= os.getenv('Aws_access_key_id'),aws_secret_access_key= os.getenv('Aws_secret_access_key')
    )
    k=s3.Bucket('map-vfs-s3')
    substring =  "testing/template"
    pdf_names = []  

    for obj in k.objects.all():
        if re.search(substring, obj.key):
            pdf_name = obj.key.split('/')[-1]  # Extracts the PDF name
            pdf_names.append(pdf_name)

    time.sleep(1)
    # store end time
    end = time.time()
    # total time taken
    # print(f"check_validate {end - begin}")
    
    return pdf_names  

def compress_directory(input_file_path):
        with open(input_file_path, 'rb') as f:
            compressed_data = lz4.frame.compress(f.read())
        return compressed_data
  

@app.route('/get_pdf_text', methods=['POST'])
def main():
    try:

        begin = time.time()

        # request pdf
        pdf =request.files['file']
        user_question = request.form["question"]
        pdf_name = request.form["pdf_name"]
        pdf_path = os.path.join(tempfile.gettempdir(), pdf_name)
        pdf.save(pdf_path)
                
        # Compress the PDF
        compress_pdf = compress_directory(pdf_path)
        data=check()
        if pdf_name in data:
            pass

        else:
            store_pdf=upload_pdf(compress_pdf,pdf_name)

        # main function
        raw_text = get_pdf_data(pdf_name)
        text_chunks = get_text_chunks(raw_text)
        vectorstore = get_vectorstore(text_chunks)
        result = get_conversation_chain(vectorstore,user_question)
        time.sleep(1)
        # store end time
        end = time.time()
        # total time taken
        # print(f"final_result {end - begin}")

        return jsonify(result)
    except Exception as e:
        error_message = str(e) 
        # Perform additional actions or return the error message as needed
        return jsonify({'error': error_message}), 500
   

   
    

