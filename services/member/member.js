const mongoose = require('mongoose');
const moment = require('moment');

// MODELS IMPORT
const Member = require('../../models/db/member/member.model');


async function Create(req) {
    try {

        const memberModel = new Member(req.body);
        memberModel.createDate = moment.utc();
        memberModel._id = new mongoose.Types.ObjectId();
        try {
            var result = await memberModel.save()
                .then(doc => {
                    return { isSuccess: true, message: "Member Created Successfully!!", data: doc };
                }).catch(err => {
                    return { isSuccess: false, message: "Failed to Created Member!!", data: err };
                });
            return result;
        } catch (err) {
            return { isSuccess: false, data: { code: err.code, errmsg: err.code == 11000 ? "Member Name Already Exists" : err.errmsg }, message: '' };
        }
    }
    catch (ex) {
        return { isSuccess: false, data: ex, message: "Something Went Worng!!" };
    }
}

async function bulkCreate(req) {
    try {
        try {
            const memberData = req.body.map(x => ({
                _id: new mongoose.Types.ObjectId(),
                firstName: x.firstName,
                lastName: x.lastName,
                email: x.email,
                mobile: x.mobile,
                participant_id: mongoose.Types.ObjectId(x.participant_id),
                template_id: mongoose.Types.ObjectId(x.template_id),
                catogory: x.catogory,
                title:x.title,
                createDate: moment.utc()
            }));
            var result = await Member.insertMany(memberData)
                .then(doc => {
                    return { isSuccess: true, message: "Member Created Successfully!!", data: doc };
                }).catch(err => {
                    return { isSuccess: false, message: "Failed to Created Member!!", data: err };
                });
            return result;
        } catch (err) {
            return { isSuccess: false, data: { code: err.code, errmsg: err.code == 11000 ? "Member Name Already Exists" : err.errmsg }, message: '' };
        }
    }
    catch (ex) {
        return { isSuccess: false, data: ex, message: "Something Went Worng!!" };
    }
}


async function bulkUpdate(req) {
    try {
        try {
            var getMemberData = await Member.deleteMany({ participant_id: req.body[0].participant_id });
            ;
            const memberData = req.body.map(x => ({
                _id: new mongoose.Types.ObjectId(),
                firstName: x.firstName,
                lastName: x.lastName,
                email: x.email,
                mobile: x.mobile,
                participant_id: mongoose.Types.ObjectId(x.participant_id),
                template_id: mongoose.Types.ObjectId(x.template_id),
                catogory: x.catogory,
                createDate: moment.utc()
            }));
            var result = await Member.insertMany(memberData)
                .then(doc => {
                    return { isSuccess: true, message: "Member Updated Successfully!!", data: doc };
                }).catch(err => {
                    return { isSuccess: false, message: "Failed to Updated Member!!", data: err };
                });
            return result;
        } catch (err) {
            return { isSuccess: false, data: { code: err.code, errmsg: err.code == 11000 ? "Member Name Already Exists" : err.errmsg }, message: '' };
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
        var result = await Member.findByIdAndUpdate(categoryId, data, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Member Updated successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to Update Member!!", data: err };
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to Update Member!!", data: ex };
    }
}

async function Delete(req) {
    try {
        var categoryId = req.params.id;
        var result = await Member.findByIdAndUpdate({ _id: categoryId }, { isActive: false, isDeleted: true, updatedDate: moment.utc() }, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Member deleted successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to delete Member!!", data: err }
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to delete Member!!", data: ex };
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

        var count = await Member
            .where(filter)
            .count()
            .then(res => {
                return { isSuccess: true, data: res };
            });


        var result = await Member.find()
            .where(filter)            
            // .populate('catogory_id', 'templateName')
            .populate('participant_id', 'participantFirstName participantLastName participantEmail participantMobile')
            .populate('template_id', 'templateName')
            .skip(skip)
            .limit(pageSize)
            .sort(sorting)
            .then(res => {
                return {
                    isSuccess: true,
                    message: 'Member Retrived Successfully!!',
                    data: res,
                    currentPage: pageNumber,
                    pageSize: pageSize,
                    totalRecords: count.data
                };
            }).catch(err => {
                return {
                    isSuccess: false,
                    message: 'Failed to get Member!!',
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
            message: 'Exception while getting Member!!',
            data: ex,
            currentPage: pageNumber,
            pageSize: pageSize,
            totalRecords: 0
        };
    }
}

async function GetById(id) {
    try {
        var result = await Member.findOne({
            _id: id,
            isDeleted: false,
        })
        // .populate('catogory_id', 'type')
        .populate('participant_id', 'participantFirstName participantLastName participantEmail participantMobile')
        .populate('template_id', 'templateName')
            .exec()
            .then(res => {
                if (res !== null) {
                    return { isSuccess: true, message: 'Member Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'Invalid Member ID!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Member details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Member!!', data: ex };
    }
}

async function Patch(req) {
    try {
        var categoryId = req.params.id;
        var data = req.body;
        var result = await MemberPatchUpdate(categoryId, data);
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Member!!', data: ex };
    }
}

async function MemberPatchUpdate(id, patchData) {
    try {
        if (patchData !== null) {
            patchData.updatedDate = moment.utc();
            let updateResult = await Member.findByIdAndUpdate({ _id: id }, { $set: patchData }, { new : true })
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

async function GetBy(id) {
    try {

       
        var result = await Member.find(
            id,
            // isDeleted: false,
        )
        .populate('template_id', 'templateName')
            .exec()
            .then(res => {
                if (res !== null) {
                    return { isSuccess: true, message: 'Member Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'Invalid Member ID!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Member details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Member!!', data: ex };
    }
}


module.exports = {
    create: Create,
    bulkCreate: bulkCreate,
    bulkUpdate: bulkUpdate,
    update: Update,
    delete: Delete,
    getAll: GetAll,
    get: GetById,
    find: GetBy,
    patch: Patch 
}
