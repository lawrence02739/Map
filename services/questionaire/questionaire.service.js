const mongoose = require('mongoose');
const moment = require('moment');

// MODELS IMPORT
const Questionaire = require('../../models/db/questionaire/questionaire.model');


async function Create(req) {
    try {
        const questionModel = new Questionaire(req.body);

        questionModel._id = new mongoose.Types.ObjectId();
        questionModel.createdDate = moment.utc();
        var result = await questionModel.save()
            .then(doc => {
                return { isSuccess: true, message: "Questionaire Created Successfully!!", data: doc };
            }).catch(err => {
                return { isSuccess: false, message: "Failed to Created Questionaire!!", data: err };
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, data: ex, message: "Something Went Worng!!" };
    }
}

async function Update(req) {
    try {
        var id = req.params.id;
        var data = req.body;
        data.updatedDate = moment.utc();
        var result = await Questionaire.findByIdAndUpdate(id, data, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Questionaire Updated successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to Update Questionaire!!", data: err };
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to Update Questionaire!!", data: ex };
    }
}

async function Delete(req) {
    try {
        var id = req.params.id;
        var result = await Questionaire.findByIdAndUpdate({ _id: id }, { isActive: false, isDeleted: true, updatedDate: moment.utc() }, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Questionaire deleted successfully!!", data: res };
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
        if (req.query.workshop) filter.workshop = req.query.workshop;
        if (req.query.participant) filter.participant = req.query.participant;
        if (req.query.status) filter.status = req.query.status;
        if (req.query.createdBy) filter.createdBy = req.query.createdBy;
        filter.isDeleted = false;

        if (req.query.sortBy && req.query.orderBy) {
            let sortByList = req.query.sortBy.split(",");
            let orderByList = req.query.orderBy.split(",");

            for (let i = 0; i < sortByList.length; i++) {
                let sortField = sortByList[i];
                sorting[sortField] = orderByList[i] === "desc" ? -1 : 1;
            }
        }

        var count = await Questionaire
            .where(filter)
            .count()
            .then(res => {
                return { isSuccess: true, data: res };
            });


        var result = await Questionaire.find()
            .where(filter)
            .populate({
                path: 'workshop',
                // Get friends of friends - populate the 'friends' array for every friend
                populate: { path: 'conductedBy', select: 'firstName lastName fullName email role profileImageURL isGlobalSynonymEdit' }
            })
            //.populate('workshop')
            .populate('participant', 'firstName lastName title email fullName organizationName')
            .populate('createdBy', 'firstName lastName fullName email profileImageURL')
            .populate('updatedBy', 'firstName lastName fullName email profileImageURL')
            .skip(skip)
            .limit(pageSize)
            .sort(sorting)
            .then(res => {
                return {
                    isSuccess: true,
                    message: 'Questionaire Retrived Successfully!!',
                    data: res,
                    currentPage: pageNumber,
                    pageSize: pageSize,
                    totalRecords: count.data
                };
            }).catch(err => {
                return {
                    isSuccess: false,
                    message: 'Failed to get Questionaire!!',
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
            message: 'Exception while getting Questionaire!!',
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

        var result = await Questionaire.findById(id)
            .where(filter)
            .populate({
                path: 'workshop',
                // Get friends of friends - populate the 'friends' array for every friend
                populate: { path: 'conductedBy', select: 'firstName lastName fullName email role profileImageURL isGlobalSynonymEdit' }
            })
            .populate('participant')
            .populate('createdBy', 'firstName lastName fullName email profileImageURL')
            .populate('updatedBy', 'firstName lastName fullName email profileImageURL')
            .exec()
            .then(res => {
                if (res !== null) {
                    return { isSuccess: true, message: 'Questionaire Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'Invalid Questionaire ID!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Questionaire details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Questionaire!!', data: ex };
    }
}


async function Patch(req) {
    try {
        var id = req.params.id;
        var data = req.body;
        var result = await patchUpdate(id, data);
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Questionaire!!', data: ex };
    }
}

async function patchUpdate(id, patchData) {
    try {
        if (patchData !== null) {
            patchData.updatedDate = moment.utc();
            let updateResult = await Questionaire.findByIdAndUpdate({ _id: id }, { $set: patchData }, { new: true })
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

async function GetDashboard(req) {
    try {
        let filter = []
        if (req.query.createdBy) {
            filter = [
                {
                    $match: {
                        createdBy: { $eq: mongoose.Types.ObjectId(req.query.createdBy) },
                        isActive: { $eq: true }
                    }
                },
                {
                    $group: {
                        _id: null,
                        total_count: { $sum: { $size: "$results" } }
                    }
                }
            ]
        } else {
            filter = [
                {
                    $match: { isActive: { $eq: true } }
                },
                {
                    $group: {
                        _id: null,
                        total_count: { $sum: { $size: "$results" } }
                    }
                }]
        };

        var result = await Questionaire.aggregate(filter).then(res => {
            return {
                isSuccess: true,
                message: 'Questionaire Results Retrived Successfully!!',
                data: res,
            };
        }).catch(err => {
            return {
                isSuccess: false,
                message: 'Failed to get Questionaire!!',
                data: err,
            };
        });
        return result;
    } catch (ex) {
        return {
            isSuccess: false,
            message: 'Exception while getting Questionaire!!',
            data: ex,
        };
    }
}


module.exports = {
    create: Create,
    update: Update,
    delete: Delete,
    getAll: GetAll,
    get: GetById,
    patch: Patch,
    getDashboard: GetDashboard
}
