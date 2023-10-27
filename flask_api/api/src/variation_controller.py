from mongodb.config import mongo, app, s3_client
from flask import jsonify
from word_forms.word_forms import get_word_forms
from flask_cors import CORS

cors = CORS(app, origins='*')

@app.route('/script/variations/<string:synonymWord>', methods=['GET'])
def getVariations(synonymWord):
    # wordnet_lemmatizer = WordNetLemmatizer()
    # lancaster=LancasterStemmer()
    variants = []

    lowerCase = synonymWord.lower()
    variants.append(lowerCase)

    # if lowerCase[-2:] == 'ed':
    #     lowerCase = lowerCase[:-2]
    # rootWord = wordnet_lemmatizer.lemmatize(lowerCase)
    # if synonymWord == rootWord:
    #     lancaster.stem(rootWord)
    # print(rootWord)
    result = None
    # if rootWord:
    #     result = get_word_forms(rootWord)
    # else:
    #     result = get_word_forms(lowerCase)
    result = get_word_forms(lowerCase)
    for listVariants in result.values():
        if bool(listVariants):
            for x in listVariants:
                if x not in variants:
                    variants.append(x)
    return jsonify(variants)
