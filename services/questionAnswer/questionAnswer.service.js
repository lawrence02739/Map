const mongoose = require('mongoose');
const moment = require('moment');

// MODELS IMPORT
const QuestionAnswer = require('../../models/db/questionAnswer/questionAnswer.model');


async function Create(req) {
    try {
        
        const categoryModel = new QuestionAnswer(req.body);
        categoryModel.createDate = moment.utc();
        categoryModel._id = new mongoose.Types.ObjectId();

        try {
            var result = await categoryModel.save()
                .then(doc => {
                    return { isSuccess: true, message: "Question Answer Created Successfully!!", data: doc };
                }).catch(err => {
                    return { isSuccess: false, message: "Failed to Created Question Answer!!", data: err };
                });
            return result;
        } catch (err) {
            return { isSuccess: false, data: { code: err.code, errmsg: err.code == 11000 ? "Question Answer Already Exists" : err.errmsg }, message: '' };
        }
    }
    catch (ex) {
        return { isSuccess: false, data: ex, message: "Something Went Worng!!" };
    }
}

async function BulkCreate(req) {
    try {
        const categories = req.body;
        const categoriesWithIds = categories.map(categoryData => ({
            ...categoryData,
            createDate: moment.utc(),
            _id: new mongoose.Types.ObjectId(),
        }));
    
        const result = await QuestionAnswer.insertMany(categoriesWithIds);
    
        return {
            isSuccess: true,
            message: "Question Answer Created Successfully!!",
            data: result,
        };
    } catch (ex) {
        return { isSuccess: false, data: ex, message: "Something Went Wrong!!" };
    }
}



async function BulkUpdate(data) {
    try {
        const updateQueries = [];
        data.forEach(async (item) => {
        updateQueries.push({
            updateMany: {
                filter: { _id: item.id },
                update: { questionAnswer: item.questionAnswer},
            },
        });
    });
   
        const result = await QuestionAnswer.bulkWrite(updateQueries);
    
        return {
            isSuccess: true,
            message: "Question Answer Created Successfully!!",
            data: result,
        };
    } catch (ex) {
        return { isSuccess: false, data: ex, message: "Something Went Wrong!!" };
    }
}



async function GetBy(id) {
    try {


        var result = await QuestionAnswer.find(
            id,
            // isDeleted: false,
        )
            .exec()
            .then(res => {
                if (res !== null) {
                    return { isSuccess: true, message: 'Question Answer Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'Invalid Question Answer ID!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Question Answer details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Question Answer!!', data: ex };
    }
}





async function Update(req) {
    try {
        var categoryId = req.params.id;
        var data = req.body;
        data.updatedDate = moment.utc();
        var result = await QuestionAnswer.findByIdAndUpdate(categoryId, data, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Question Answer Updated successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to Question Answer Category!!", data: err };
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to Update Question Answer!!", data: ex };
    }
}

async function Delete(req) {
    try {
        var categoryId = req.params.id;
        var result = await QuestionAnswer.findByIdAndUpdate({ _id: categoryId }, { isActive: false, isDeleted: true, updatedDate: moment.utc() }, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Question Answer deleted successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to delete Question Answer!!", data: err }
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to delete Question Answer!!", data: ex };
    }
}

async function GetAllData() {
    try {
        var result = await QuestionAnswer.find()
            .then(res => {
                return { isSuccess: true, message: "Question Answer deleted successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to get Question Answer!!", data: err }
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to get Question Answer!!", data: ex };
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
        if (req.query.type) filter.type = { $regex: '.*' + req.query.type + '.*', $options: 'i' };
        filter.isDeleted = false;

        if (req.query.sortBy && req.query.orderBy) {
            let sortByList = req.query.sortBy.split(",");
            let orderByList = req.query.orderBy.split(",");

            for (let i = 0; i < sortByList.length; i++) {
                let sortField = sortByList[i];
                sorting[sortField] = orderByList[i] === "desc" ? -1 : 1;
            }
        }

        var count = await QuestionAnswer
            .where(filter)
            .count()
            .then(res => {
                return { isSuccess: true, data: res };
            });


        var result = await QuestionAnswer.find()
            .where(filter)
            .populate('createdBy', 'firstName lastName fullName email profileImageURL')
            .populate('updatedBy', 'firstName lastName fullName email profileImageURL')
            .skip(skip)
            .limit(pageSize)
            .sort(sorting)
            .then(res => {
                return {
                    isSuccess: true,
                    message: 'Question Answer Retrived Successfully!!',
                    data: res,
                    currentPage: pageNumber,
                    pageSize: pageSize,
                    totalRecords: count.data
                };
            }).catch(err => {
                return {
                    isSuccess: false,
                    message: 'Failed to get Question Answer!!',
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
            message: 'Exception while getting Question Answer!!',
            data: ex,
            currentPage: pageNumber,
            pageSize: pageSize,
            totalRecords: 0
        };
    }
}


async function GetById(id) {
    try {
        var result = await QuestionAnswer.findOne({
            _id: id,
            isDeleted: false,
        })
            .populate('createdBy', 'firstName lastName fullName email profileImageURL')
            .exec()
            .then(res => {
                if (res !== null) {
                    return { isSuccess: true, message: 'Question Answer Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'Invalid Question Answer ID!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Question Answer details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Question Answer!!', data: ex };
    }
}

async function Patch(req) {
    try {
        var categoryId = req.params.id;
        var data = req.body;
        var result = await categoryPatchUpdate(categoryId, data);
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Question Answer!!', data: ex };
    }
}

async function categoryPatchUpdate(id, patchData) {
    try {
        if (patchData !== null) {
            patchData.updatedDate = moment.utc();
            let updateResult = await QuestionAnswer.findByIdAndUpdate({ _id: id }, { $set: patchData }, { new: true })
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

async function getByField(id) {
    try {
            var result = await QuestionAnswer.find(id)
            .populate('question_id','question')
            .populate('member_id','catogory')
            .populate('participant_id','catogory')

                .then(res => {
                   if(!res[0]){
                    return { isSuccess: false, message: "not responsed !!", data: res };
                   }
                    return { isSuccess: true, message: "Question Answer retrived successfully!!", data: res };
                })
                .catch(err => {
                    return { isSuccess: false, message: "Failed to get Question Answer!!", data: err }
                });
            
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to get Question Answer!!", data: ex };
    }
}



module.exports = {
    create: Create,
    update: Update,
    delete: Delete,
    getAll: GetAll,
    get: GetById,
    getAll:GetAllData,
    find: GetBy,
    patch: Patch,
    getByField:getByField,
    bulkCreate: BulkCreate,
    bulkUpdate:BulkUpdate
}
