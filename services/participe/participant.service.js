const mongoose = require('mongoose');
const moment = require('moment');

// MODELS IMPORT
const Participant = require('../../models/db/participant/participant.model');


async function Create(req) {
    try {

        const participantModel = new Participant(req.body);
        participantModel.createDate = moment.utc();
        participantModel._id = new mongoose.Types.ObjectId();
        try {
            var result = await participantModel.save()
                .then(doc => {
                    return { isSuccess: true, message: "Participant Created Successfully!!", data: doc };
                }).catch(err => {
                    return { isSuccess: false, message: "Failed to Created Participant!!", data: err };
                });
            return result;
        } catch (err) {
            return { isSuccess: false, data: { code: err.code, errmsg: err.code == 11000 ? "Participant Name Already Exists" : err.errmsg }, message: '' };
        }
    }
    catch (ex) {
        return { isSuccess: false, data: ex, message: "Something Went Worng!!" };
    }
}

async function Update(req) {
    try {
        var participantId = req.params.id;
        var data = req.body;
        data.updatedDate = moment.utc();
        var result = await Participant.findByIdAndUpdate(participantId, data, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Participant Updated successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to Update Participant!!", data: err };
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to Update Participant!!", data: ex };
    }
}

async function Delete(req) {
    try {
        var participantId = req.params.id;
        var result = await Participant.findByIdAndUpdate({ _id: participantId }, { isActive: false, isDeleted: true, updatedDate: moment.utc() }, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Participant deleted successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to delete Participant!!", data: err }
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to delete Participant!!", data: ex };
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

        var count = await Participant
            .where(filter)
            .count()
            .then(res => {
                return { isSuccess: true, data: res };
            });


        const filterOptions = {
            isDeleted: false,
            isActive: true
        };



        var result = await Participant.aggregate([
            {
                $match: filterOptions
            },
            {
                $lookup: {
                    from: 'members',
                    localField: '_id',
                    foreignField: 'participant_id',
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and: [
                                        { $eq: ['$isDeleted', false] } // Additional condition on isDeleted
                                    ]
                                }
                            }
                        }
                    ],
                    as: 'Members'
                }
            }

        ])
            // .where(filter)
            // .populate('group_id', 'groupName')
            // .populate('catogory_id', 'type')
            // .skip(skip)
            // .limit(pageSize)
            // .sort(sorting)
            .then(res => {
                return {
                    isSuccess: true,
                    message: 'Participant Retrived Successfully!!',
                    data: res,
                    currentPage: pageNumber,
                    pageSize: pageSize,
                    totalRecords: count.data
                };
            }).catch(err => {
                return {
                    isSuccess: false,
                    message: 'Failed to get Participant!!',
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
            message: ex,
            // data: ex,
            // currentPage: pageNumber,
            // pageSize: pageSize,
            totalRecords: 0
        };
    }
}

async function GetById(id) {
    try {
        var result = await Participant.findOne({
            _id: id,
            isDeleted: false,
        })
            // .populate('organization_id', 'organizationName address city state zipCode country')
            // .populate('template_id', 'templateName')
            .populate('group_id', 'groupName tempalte_id')
            // .populate('catogory_id', 'type')
            .exec()
            .then(res => {
                if (res !== null) {
                    return { isSuccess: true, message: 'Participant Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'Invalid Participant ID!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Participant details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Participant!!', data: ex };
    }
}


async function GetBy(id) {
    try {
        
        let filterOptions = id
        
    
        const result = await Participant.aggregate([
            {
                $match: filterOptions
            },

            {
                $lookup: {
                    from: 'members',
                    localField: '_id',
                    foreignField: 'participant_id',
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and: [
                                        { $eq: ['$isDeleted', false] }
                                    ]
                                }
                            }
                        }
                    ],
                    as: 'Members',
                }
            },
            {
                $lookup: {
                    from: 'resultpdfs',
                    localField: '_id',
                    foreignField: 'participant_id',
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and: [
                                        { $eq: ['$isDeleted', false] }
                                    ]
                                }
                            }
                        }
                    ],
                    as: 'Result_pdf',
                }
            },


        ])
            // var result = await Participant.find(
            //     id,
            //     // isDeleted: false,
            // )
            // .populate('template_id', 'templateName')
            .exec()
            .then(res => {
                if (res !== null) {
                    return { isSuccess: true, message: 'Participant Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'Invalid Participant ID!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Participant details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Participant!!', data: ex };
    }
}

async function Patch(req) {
    try {
        var categoryId = req.params.id;
        var data = req.body;
        var result = await ParticipantPatchUpdate(categoryId, data);
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Participant!!', data: ex };
    }
}

async function ParticipantPatchUpdate(id, patchData) {
    try {
        if (patchData !== null) {
            patchData.updatedDate = moment.utc();
            let updateResult = await Participant.findByIdAndUpdate({ _id: id }, { $set: patchData }, { new: true })
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
    patch: Patch
}
