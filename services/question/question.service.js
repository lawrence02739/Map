const mongoose = require('mongoose');
const moment = require('moment');

// MODELS IMPORT
const Category = require('../../models/db/question/question.model');


async function Create(req) {
    try {

        const categoryModel = new Category(req.body);
        categoryModel.createDate = moment.utc();
        categoryModel._id = new mongoose.Types.ObjectId();

        try {
            var result = await categoryModel.save()
                .then(doc => {
                    return { isSuccess: true, message: "Question Created Successfully!!", data: doc };
                }).catch(err => {
                    return { isSuccess: false, message: "Failed to Created Question!!", data: err };
                });
            return result;
        } catch (err) {
            return { isSuccess: false, data: { code: err.code, errmsg: err.code == 11000 ? "Question Name Already Exists" : err.errmsg }, message: '' };
        }
    }
    catch (ex) {
        return { isSuccess: false, data: ex, message: "Something Went Worng!!" };
    }
}

async function BulkCreate(req) {
    try {
        const categories = req;
        const highestPosition = await Category.findOne({isDeleted:false,template_id:req.template_id}, 'position', { sort: { position: -1 } }).exec();
        var position = highestPosition ? highestPosition.position +1: 1;
        const categoriesWithIds = categories.map(categoryData => ({
            ...categoryData,
            createDate: moment.utc(),
            position:position++,
            _id: new mongoose.Types.ObjectId(),
        }));

        const result = await Category.insertMany(categoriesWithIds);

        return {
            isSuccess: true,
            message: "Question Created Successfully!!",
            data: result,
        };
    } catch (ex) {
        return { isSuccess: false, data: ex, message: "Something Went Wrong!!" };
    }
}



async function BulkUpdate(data) {
    try {
        const updateQueries = [];
        const highestPosition = await Category.findOne({isDeleted:false,template_id:data[0].template_id}, 'position', { sort: { position: -1 } }).exec();
        var position = highestPosition ? highestPosition.position +1: 1;
        data.forEach(async (item) => {
            if(item.id || item.id === 0){
                updateQueries.push({
                    updateOne: {
                        filter: { _id: item.id },
                        update: { $set: item } // Update all fields with the new data
                    }
                });
            }else{
                item.position=position++
                updateQueries.push({
                    insertOne: { document: item }
                });
            }
            // updateQueries.push({
            //     updateMany: {
            //         filter: { _id: item.id },
            //         update: { question_name: item.question_name, question: item.question },
            //     },
            // });
        });

        const result = await Category.bulkWrite(updateQueries);

        return {
            isSuccess: true,
            message: "Question Created Successfully!!",
            data: result,
        };
    } catch (ex) {
        return { isSuccess: false, data: ex, message: "Something Went Wrong!!" };
    }
}



async function GetBy(id) {
    try {

        const filterOptions = {
            template_id: id.template_id,
            isDeleted: false,
            isActive: true
        };

        const result = await Category.aggregate([
            {
                $match: filterOptions
            },
            {
              $lookup: {
                from: 'questionanswers',
                localField: '_id', 
                foreignField: 'question_id',
                as: 'QuestionAnswers',
              },
            }
        ])
            // var result = await Category.find(
            //     id,
            //     // isDeleted: false,
            // )
            .exec()
            .then(res => {
                if (res !== null) {
                    return { isSuccess: true, message: 'Question Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'Invalid Question ID!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Question details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Question!!', data: ex };
    }
}





async function Update(req) {
    try {
        var categoryId = req.params.id;
        var data = req.body;
        data.updatedDate = moment.utc();
        var result = await Category.findByIdAndUpdate(categoryId, data, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Question Updated successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to Update Question!!", data: err };
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to Update Question!!", data: ex };
    }
}

async function Delete(req) {
    try {
        var categoryId = req.params.id;
        var result = await Category.findByIdAndUpdate({ _id: categoryId }, { isActive: false, isDeleted: true, updatedDate: moment.utc() }, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Question deleted successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to delete Question!!", data: err }
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to delete Question!!", data: ex };
    }
}

async function GetAllData() {
    try {
        var result = await Category.find({ isDeleted: false})
            .then(res => {
                return { isSuccess: true, message: "Category deleted successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to delete Category!!", data: err }
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to delete Category!!", data: ex };
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

        var count = await Category
            .where(filter)
            .count()
            .then(res => {
                return { isSuccess: true, data: res };
            });


        var result = await Category.find()
            .where(filter)
            .populate('createdBy', 'firstName lastName fullName email profileImageURL')
            .populate('updatedBy', 'firstName lastName fullName email profileImageURL')
            .skip(skip)
            .limit(pageSize)
            .sort(sorting)
            .then(res => {
                return {
                    isSuccess: true,
                    message: 'Question Retrived Successfully!!',
                    data: res,
                    currentPage: pageNumber,
                    pageSize: pageSize,
                    totalRecords: count.data
                };
            }).catch(err => {
                return {
                    isSuccess: false,
                    message: 'Failed to get Question!!',
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
            message: 'Exception while getting Question!!',
            data: ex,
            currentPage: pageNumber,
            pageSize: pageSize,
            totalRecords: 0
        };
    }
}


async function GetById(id) {
    try {
        var result = await Category.findOne({
            _id: id,
            isDeleted: false,
        })
            .populate('createdBy', 'firstName lastName fullName email profileImageURL')
            .exec()
            .then(res => {
                if (res !== null) {
                    return { isSuccess: true, message: 'Question Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'Invalid Question ID!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Question details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Question!!', data: ex };
    }
}

async function Patch(req) {
    try {
        var categoryId = req.params.id;
        var data = req.body;
        var result = await categoryPatchUpdate(categoryId, data);
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Question!!', data: ex };
    }
}

async function categoryPatchUpdate(id, patchData) {
    try {
        if (patchData !== null) {
            patchData.updatedDate = moment.utc();
            let updateResult = await Category.findByIdAndUpdate({ _id: id }, { $set: patchData }, { new: true })
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



module.exports = {
    create: Create,
    update: Update,
    delete: Delete,
    getAll: GetAll,
    get: GetById,
   findAll: GetAllData,
    find: GetBy,
    patch: Patch,
    bulkCreate: BulkCreate,
    bulkUpdate: BulkUpdate
}
