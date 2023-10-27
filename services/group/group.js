const mongoose = require('mongoose');
const moment = require('moment');

// MODELS IMPORT
const Group = require('../../models/db/group/group.model');


async function Create(req) {
    try {

        const groupModel = new Group(req.body);
        groupModel.createDate = moment.utc();
        groupModel._id = new mongoose.Types.ObjectId();
        try {
            var result = await groupModel.save()
                .then(doc => {
                    return { isSuccess: true, message: "Group Created Successfully!!", data: doc };
                }).catch(err => {
                    return { isSuccess: false, message: "Failed to Created Group!!", data: err };
                });
            return result;
        } catch (err) {
            return { isSuccess: false, data: { code: err.code, errmsg: err.code == 11000 ? "Group Name Already Exists" : err.errmsg }, message: '' };
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
        var result = await Group.findByIdAndUpdate(categoryId, data, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Group Updated successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to Update Group!!", data: err };
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to Update Group!!", data: ex };
    }
}

async function Delete(req) {
    try {
        var categoryId = req.params.id;
        var result = await Group.findByIdAndUpdate({ _id: categoryId }, { isActive: false, isDeleted: true, updatedDate: moment.utc() }, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Group deleted successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to delete Group!!", data: err }
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to delete Group!!", data: ex };
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
            let sortByList = req.query.sortBy.split(",");
            let orderByList = req.query.orderBy.split(",");

            for (let i = 0; i < sortByList.length; i++) {
                let sortField = sortByList[i];
                sorting[sortField] = orderByList[i] === "desc" ? -1 : 1;
            }
        }

        var count = await Group
            .where(filter)
            .count()
            .then(res => {
                return { isSuccess: true, data: res };
            });


        var result = await Group.find()
            .where(filter)            
            .populate('groupOranization_id', 'organizationName')
            .populate('tempalte_id', 'templateName ')
            .skip(skip)
            .limit(pageSize)
            .sort(sorting)
            .then(res => {
                return {
                    isSuccess: true,
                    message: 'Group Retrived Successfully!!',
                    data: res,
                    currentPage: pageNumber,
                    pageSize: pageSize,
                    totalRecords: count.data
                };
            }).catch(err => {
                return {
                    isSuccess: false,
                    message: 'Failed to get Group!!',
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
            message: 'Exception while getting Group!!',
            data: ex,
            currentPage: pageNumber,
            pageSize: pageSize,
            totalRecords: 0
        };
    }
}

async function GetById(id) {
    try {
        var result = await Group.findOne({
            _id: id,
            isDeleted: false,
        })
        .populate('groupOranization_id', 'organizationName ')
        .populate('tempalte_id', 'templateName ')
            .exec()
            .then(res => {
                if (res !== null) {
                    return { isSuccess: true, message: 'Group Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'Invalid Group ID!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Group details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Group!!', data: ex };
    }
}

async function Patch(req) {
    try {
        var categoryId = req.params.id;
        var data = req.body;
        var result = await categoryPatchUpdate(categoryId, data);
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Group!!', data: ex };
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
async function getOne(id) {
    try {
        var result = await Group.findOne(id)
            .then(res => {
                if (res !== null) {
                    return { isSuccess: true, message: 'Group Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'Group not found!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Group details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Group!!', data: ex };
    }
}


module.exports = {
    create: Create,
    update: Update,
    delete: Delete,
    getAll: GetAll,
    get: GetById,
    getOne:getOne,
    patch: Patch 
}
