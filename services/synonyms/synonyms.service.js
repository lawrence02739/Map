const mongoose = require('mongoose');
const moment = require('moment');

// MODELS IMPORT
const Synonyms = require('../../models/db/synonyms/synonyms.model');


async function Create(req) {
    try {
        const synonymsModel = new Synonyms(req.body);
        if (!synonymsModel.userId || synonymsModel.userId === undefined || null || '') {
            synonymsModel.type = 'global'
        }
        else {
            synonymsModel.type = 'individual'
            let synonymId = '';
            let resultAnalyzed = await synonymResultAnalysis(synonymsModel, synonymId)
            if (resultAnalyzed.isSuccess) {
                resultAnalyzed.isSuccess = false;
                return resultAnalyzed;
            }
        }

        synonymsModel._id = new mongoose.Types.ObjectId();
        synonymsModel.createdDate = moment.utc();
        var result = await synonymsModel.save()
            .then(doc => {
                return { isSuccess: true, message: "Terminology Created Successfully!!", data: doc };
            }).catch(err => {
                return { isSuccess: false, message: "Failed to Created Synonyms!!", data: err };
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, data: ex, message: "Something Went Worng!!" };
    }
}

async function Update(req) {
    try {
        var synonymsId = req.params.id;
        var data = req.body;
        data.updatedDate = moment.utc();
        var result = await Synonyms.findByIdAndUpdate(synonymsId, data, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Synonyms Updated successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to Update Synonyms!!", data: err };
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to Update Synonyms!!", data: ex };
    }
}

async function Delete(req) {
    try {
        var synonymsId = req.params.id;
        var result = await Synonyms.findByIdAndUpdate({ _id: synonymsId }, { isActive: false, isDeleted: true, updatedDate: moment.utc() }, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Synonyms deleted successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to delete Synonyms!!", data: err }
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to delete Synonyms!!", data: ex };
    }
}

async function GetAll(req) {
    try {
        let pageSize = 10;
        if (req.query.pageSize) {
            pageSize = parseInt(req.query.pageSize);
        }
        let pageNumber = req.query.pageNumber > 1 ? req.query.pageNumber : 1;
        let skip = pageSize * pageNumber - pageSize;
        let filter = {};
        let sorting = {};
        if (req.query.name) filter.name = { $regex: '.*' + req.query.name + '.*', $options: 'i' };
        filter.isDeleted = false;

        if (req.query.sortBy && req.query.orderBy) {
            let sortByList = req.query.sortBy.split(",");
            let orderByList = req.query.orderBy.split(",");

            for (let i = 0; i < sortByList.length; i++) {
                let sortField = sortByList[i];
                sorting[sortField] = orderByList[i] === "desc" ? -1 : 1;
            }
        }

        var count = await Synonyms
            .where(filter)
            .count()
            .then(res => {
                return { isSuccess: true, data: res };
            });


        var result = await Synonyms.find()
            .where(filter)
            .skip(skip)
            .limit(pageSize)
            .sort(sorting)
            .then(res => {
                return {
                    isSuccess: true,
                    message: 'Synonyms Retrived Successfully!!',
                    data: res,
                    currentPage: pageNumber,
                    pageSize: pageSize,
                    totalRecords: count.data
                };
            }).catch(err => {
                return {
                    isSuccess: false,
                    message: 'Failed to get Synonyms!!',
                    data: err,
                    currentPage: pageNumber,
                    pageSize: pageSize,
                    totalRecords: 0
                };
            });
        return result;
    } catch (ex) {
        return {
            isSuccess: false,
            message: 'Exception while getting Synonyms!!',
            data: ex,
            currentPage: pageNumber,
            pageSize: pageSize,
            totalRecords: 0
        };
    }
}

async function GetById(id, userId) {
    try {
        var filter = {
            isDeleted: false
        };
        if (userId !== "" || undefined || null) {
            filter.userId = userId;
        }

        var result = await Synonyms.findById(id)
            .where(filter)
            .exec()
            .then(res => {
                if (res !== null) {
                    return { isSuccess: true, message: 'Synonyms Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'Invalid Synonyms ID!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Synonyms details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Synonyms!!', data: ex };
    }
}

async function GetSynonyms(categoryId, userId) {
    try {
        var filter = {
            isDeleted: false,
            category: categoryId,
        };
        if (userId !== "" || undefined || null) {
            filter.userId = userId;
        }

        var result = await Synonyms.find()
            .where(filter)
            .populate('category', 'color id type')
            .populate('createdBy', 'firstName lastName fullName email profileImageURL')
            .populate('updatedBy', 'firstName lastName fullName email profileImageURL')
            .exec()
            .then(res => {
                if (res !== null && res.length > 0) {
                    return { isSuccess: true, message: 'Synonyms Retrived Successfully!!', data: res[0] };
                }
                else {
                    return { isSuccess: false, message: 'Not Found!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Synonyms details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Synonyms!!', data: ex };
    }
}


async function Patch(req) {
    try {
        var id = req.params.id;
        var data = req.body;
        var result = await synonymsPatchUpdate(id, data);
        return result;
    } catch (err) {
        return { isSuccess: false, message: 'Error to patching Synonym!!', data: err };
    }
}

async function synonymsPatchUpdate(id, patchData) {
    try {
        let updateResult = {}
        if (patchData !== null) {
            let resultAnalyzed = await synonymResultAnalysis(patchData, id)
            if (resultAnalyzed.isSuccess) {
                resultAnalyzed.isSuccess = false;
                return resultAnalyzed
            } 
                patchData.updatedDate = moment.utc();
                updateResult = await Synonyms.findByIdAndUpdate({ _id: id }, { $set: patchData }, { new: true })
                    .then(doc => {
                        return { isSuccess: true, message: 'Updated Successfully!!', data: doc };
                    })
                    .catch(err => {
                        return { isSuccess: false, message: 'Failed to Update!!', data: err };
                    })

            return updateResult;
        }
        else {
            return { isSuccess: false, message: 'Invalid data!!', data: {} };
        }


    } catch (error) {
        return { isSuccess: false, message: 'Invalid data!!', data: error }
    }
}

async function synonymResultAnalysis(synonymData, synonymId) {
    try {
        let checkResults = await synonymsCheckInOtherGlobalSynonyms(synonymData, synonymId)
        if (checkResults.isSuccess && checkResults.data.res.length > 0) {
            let newSynonymsItems = checkResults.data.newSynonymsItems;
            let resultsMatched = checkResults.data.res;
            let matchedItemsList = []
            resultsMatched.forEach(element => {
                let matchedSynonymDocument = element.synonyms;
                let matchedItems = newSynonymsItems.filter((item) => {
                    return matchedSynonymDocument.indexOf(item) > -1
                })
                matchedItemsList = matchedItemsList.concat(matchedItems.filter((item) => matchedItemsList.indexOf(item) < 0))
            });
            return { isSuccess: true, message: 'Terminology already added to another Category', data: matchedItemsList };
        } else {
            return { isSuccess: false, message: 'Synonyms does not exist in another Category', data: matchedItemsList };
        }
    } catch (ex) {
        return { isSuccess: false, message: 'Error checking duplicate Synonym!!', data: ex };
    }
}

async function synonymsCheckInOtherGlobalSynonyms(data, synonymsId) {
    let userId = '';
    let updatedSynonymsList = data.synonyms;
    let newSynonymsItems = []
    if (synonymsId != '') {
        let findExistingValue = await GetById(synonymsId, userId);
        if (findExistingValue.isSuccess) {
            let existingSynonyms = findExistingValue.data.synonyms;
            newSynonymsItems = updatedSynonymsList.filter((item) => {
                return existingSynonyms.indexOf(item) === -1
            })
        }
    } else {
        newSynonymsItems = updatedSynonymsList;
    }

    var result = {
        isSuccess: true,
        message: 'No new synonyms Found!!!',
        data: [],
    };
    if (newSynonymsItems.length > 0) {
        try {
            result = await Synonyms.find()
                .where('type').equals('global')
                // .where('_id').ne(synonymsId)
                .all('synonyms', newSynonymsItems)
                .then(res => {
                    return {
                        isSuccess: true,
                        message: 'Synonyms Retrived Successfully!!',
                        data: { res: res, newSynonymsItems: newSynonymsItems }

                    };
                }).catch(err => {
                    return {
                        isSuccess: false,
                        message: 'Failed to get Synonyms!!',
                        data: err,
                    };
                });
        } catch (error) {
            return {
                isSuccess: false,
                message: 'Failed to match Synonyms!!',
                data: error,
            };
        }

    }

    return result;
}


module.exports = {
    create: Create,
    update: Update,
    delete: Delete,
    getAll: GetAll,
    get: GetById,
    getSynonyms: GetSynonyms,
    patch: Patch
}
