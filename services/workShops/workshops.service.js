const mongoose = require('mongoose');
const moment = require('moment');

// MODELS IMPORT
const Workshop = require('../../models/db/workShopNew/workShopNew.model');


async function Create(req) {
    try {

        const workshopModel = new Workshop(req.body);
        workshopModel.createDate = moment.utc();
        workshopModel._id = new mongoose.Types.ObjectId();
        try {
            var result = await workshopModel.save()
                .then(doc => {
                    return { isSuccess: true, message: "Workshop Created Successfully!!", data: doc };
                }).catch(err => {
                    return { isSuccess: false, message: "Failed to create Workshop!!", data: err };
                });
            return result;
        } catch (err) {
            return { isSuccess: false, data: { code: err.code, errmsg: err.code == 11000 ? "Workshop Name Already Exists" : err.errmsg }, message: '' };
        }
    }
    catch (ex) {
        return { isSuccess: false, data: ex, message: "Something Went Worng!!" };
    }
}

async function BulkCreate(req) {
    try {
        const categories = req;

        const categoriesWithIds = categories.map(categoryData => ({
            ...categoryData,
            createDate: moment.utc(),
            _id: new mongoose.Types.ObjectId(),
        }));

        const result = await Workshop.insertMany(categoriesWithIds);

        return {
            isSuccess: true,
            message: "Workshop Created Successfully!!",
            data: result,
        };
    } catch (ex) {
        return { isSuccess: false, data: ex, message: "Something Went Wrong!!" };
    }
}


async function GetBy(id) {
    try {

        var result = await Workshop.find(
            id,
        )
            // .populate('createdBy', 'firstName lastName fullName email profileImageURL')
            .exec()
            .then(res => {
                if (res !== null) {
                    return { isSuccess: true, message: 'Workshop Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'Invalid Workshop ID!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Workshop details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Workshop!!', data: ex };
    }
}





async function Update(req) {
    try {
        var workshopId = req.params.id;
        var data = req.body;
        data.updatedDate = moment.utc();
        var result = await Workshop.findByIdAndUpdate(workshopId, data, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Workshop Updated successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to Update Workshop!!", data: err };
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to Update Workshop!!", data: ex };
    }
}

async function Delete(req) {
    try {
        var workshopId = req.params.id;
        var result = await Workshop.findByIdAndUpdate({ _id: workshopId }, { isActive: false, isDeleted: true, updatedDate: moment.utc() }, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Workshop deleted successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to delete Workshop!!", data: err }
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to delete Workshop!!", data: ex };
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

        var count = await Workshop
            .where(filter)
            .count()
            .then(res => {
                return { isSuccess: true, data: res };
            });


        var result = await Workshop.find()
            .where(filter)
            .populate('createdBy', 'firstName lastName fullName email profileImageURL')
            .populate('updatedBy', 'firstName lastName fullName email profileImageURL')
            .skip(skip)
            .limit(pageSize)
            .sort(sorting)
            .then(res => {
                return {
                    isSuccess: true,
                    message: 'Workshop Retrived Successfully!!',
                    data: res,
                    currentPage: pageNumber,
                    pageSize: pageSize,
                    totalRecords: count.data
                };
            }).catch(err => {
                return {
                    isSuccess: false,
                    message: 'Failed to get Workshop!!',
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
            message: 'Exception while getting Workshop!!',
            data: ex,
            currentPage: pageNumber,
            pageSize: pageSize,
            totalRecords: 0
        };
    }
}

async function GetById(id) {
    try {
        var result = await Workshop.findOne({
            _id: id,
            isDeleted: false,
        })
            .populate('createdBy', 'firstName lastName fullName email profileImageURL')
            .exec()
            .then(res => {
                if (res !== null) {
                    return { isSuccess: true, message: 'Workshop Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'Invalid Workshop ID!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Workshop details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Workshop!!', data: ex };
    }
}

async function Patch(req) {
    try {
        var categoryId = req.params.id;
        var data = req.body;
        var result = await workshopPatchUpdate(categoryId, data);
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Workshop!!', data: ex };
    }
}

async function workshopPatchUpdate(id, patchData) {
    try {
        if (patchData !== null) {
            patchData.updatedDate = moment.utc();
            let updateResult = await Workshop.findByIdAndUpdate({ _id: id }, { $set: patchData }, { new: true })
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
    find: GetBy,
    patch: Patch,
    bulkCreate: BulkCreate
}
