const mongoose = require('mongoose');
const moment = require('moment');

// MODELS IMPORT
const Category = require('../../models/db/template/template.model');


async function Create(req) {
    try {
        const categoryModel = new Category({
            templateName: req.body.templateName,
           
            _id: new mongoose.Types.ObjectId(),
        });
        try {
            const result = await categoryModel.save()
                .then(doc => {
                    return { isSuccess: true, message: "Template Created Successfully!!", data: doc };
                }).catch(err => {
                    return { isSuccess: false, message: "Failed to created Template!!", data: err };
                });
            return result;
        } catch (err) {
            return { isSuccess: false, data: { code: err.code, errmsg: err.code == 11000 ? "Template Name Already Exists" : err.errmsg }, message: '' };
        }
    }
    catch (ex) {
        return { isSuccess: false, data: ex, message: "Something Went Worng!!" };
    }
}

async function Update(req) {
    try {
        var categoryId = req.params.id;
        var data = req.body;
        data.updatedDate = moment.utc();
        var result = await Category.findByIdAndUpdate(categoryId, data, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Template Updated successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to Update Template!!", data: err };
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to Update Template!!", data: ex };
    }
}

async function Delete(req) {
    try {
        var categoryId = req.params.id;
        var result = await Category.findByIdAndUpdate({ _id: categoryId }, { isActive: false, isDeleted: true, updatedDate: moment.utc() ,templateName:`deletedAt ${moment.utc()}` }, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Template deleted successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to delete Template!!", data: err }
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to delete Template!!", data: ex };
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
        filter.isDeleted= false;

        if (req.query.sortBy && req.query.orderBy) {
            let sortByList = req.query.sortBy.split(",") || "createdDate" ;
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
                    message: 'Template Retrived Successfully!!',
                    data: res,
                    currentPage: pageNumber,
                    pageSize: pageSize,
                    totalRecords: count.data
                };
            }).catch(err => {
                return {
                    isSuccess: false,
                    message: 'Failed to get Template!!',
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
            message: 'Exception while getting Template!!',
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
                    return { isSuccess: true, message: 'Template Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'Invalid Template ID!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Template details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Template!!', data: ex };
    }
}

async function Patch(req) {
    try {
        var categoryId = req.params.id;
        var data = req.body;
        var result = await categoryPatchUpdate(categoryId, data);
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Template!!', data: ex };
    }
}

async function categoryPatchUpdate(id, patchData) {
    try {
        if (patchData !== null) {
            patchData.updatedDate = moment.utc();
            let updateResult = await Category.findByIdAndUpdate({ _id: id }, { $set: patchData }, { new : true })
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

//update many
async function BulkUpdate(data) {
    try {
        const updateQueries = [];
        data.forEach(async (item) => {
            if(item.id || item.id === 0){
                updateQueries.push({
                    updateOne: {
                        filter: { _id: item.id },
                        update: { $set: {
                            updatedDate: moment.utc(),
                            ...item,
                        }, } 
                    }
                });
            }else{
                updateQueries.push({
                    insertOne: { document: item }
                });
            }
        });

        const result = await Category.bulkWrite(updateQueries);
        return {
            isSuccess: true,
            message: "Template Created Successfully!!",
            data: result,
        };
    } catch (ex) {
        return { isSuccess: false, data: ex, message: "Something Went Wrong!!" };
    }
}

module.exports = {
    create: Create,
    update: Update,
    delete: Delete,
    getAll: GetAll,
    get: GetById,
    patch: Patch,
    BulkUpdate:BulkUpdate
}
