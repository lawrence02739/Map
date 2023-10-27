const mongoose = require('mongoose');
const pwd = require('../../lib/password');
const moment = require('moment');




// MODELS IMPORT
const Participant = require('../../models/db/workshop/participant.model');


async function Create(req) {
    try {
        debugger;
        // Add validation 
        const participantModel = new Participant(req.body);
        var exist = await GetParticipantByWorkshop(participantModel.workshop, participantModel.email);
        if(exist.isSuccess){
            return { isSuccess: false, message: "Participant already exist in Workshop!!", data: exist.data };
        }
        
        participantModel._id = new mongoose.Types.ObjectId();
        participantModel.createdDate = moment.utc();
        var result = await participantModel.save()
            .then(doc => {
                return { isSuccess: true, message: "Participant Created Successfully!!", data: doc };
            }).catch(err => {
                return { isSuccess: false, message: "Failed to Created Participant!!", data: err };
            });
        return result;
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
        if (req.query.name) filter.name = { $regex: '.*' + req.query.name + '.*', $options: 'i' };
        if (req.query.workshop) filter.workshop = req.query.workshop;
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


        var result = await Participant.find()
            .where(filter)
            .populate('workshop')
            .populate('createdBy', 'firstName lastName fullName email profileImageURL')
            .populate('updatedBy', 'firstName lastName fullName email profileImageURL')
            .skip(skip)
            .limit(pageSize)
            .sort(sorting)
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
            message: 'Exception while getting Participant!!',
            data: ex,
            currentPage: pageNumber,
            pageSize: pageSize,
            totalRecords: 0
        };
    }
}

async function GetById(id) {
    try {
        var result = await Participant.findById(id)
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



async function GetParticipantByWorkshop(workshopId, email) {
    try {
        var filter = { workshop : workshopId}
        var result = await Participant.findOne({email : email})
            .where(filter)
            .exec()
            .then(res => {
                if (res !== null) {
                    return { isSuccess: true, message: 'Participant Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'No records found!!', data: res };
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
        var id = req.params.id;
        var data = req.body;
        var result = await participantPatchUpdate(id, data);
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Category!!', data: ex };
    }
}

async function participantPatchUpdate(id, patchData) {
    try {
        if (patchData !== null) {
            patchData.updatedDate = moment.utc();
            let updateResult = await Participant.findByIdAndUpdate({ _id: id }, { $set: patchData }, { new : true })
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
    patch : Patch,
    getParticipantByWorkshop : GetParticipantByWorkshop
}
