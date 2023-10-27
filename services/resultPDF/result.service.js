const mongoose = require('mongoose');
const moment = require('moment');

// MODELS IMPORT
const ResultPDF = require('../../models/db/resultPDF/resultPDF');


async function Create(req) {
    try {
        
        const categoryModel = new ResultPDF(req.body);
        categoryModel.createDate = moment.utc();
        categoryModel._id = new mongoose.Types.ObjectId();

        try {
            var result = await categoryModel.save()
                .then(doc => {
                    return { isSuccess: true, message: "Result PDF Created Successfully!!", data: doc };
                }).catch(err => {
                    return { isSuccess: false, message: "Failed to  created!!", data: err };
                });
            return result;
        } catch (err) {
            return { isSuccess: false, data: { code: err.code, errmsg: err.code == 11000 ? "Result PDF  Already Exists" : err.errmsg }, message: '' };
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
    
        const result = await ResultPDF.insertMany(categoriesWithIds);
    
        return {
            isSuccess: true,
            message: "Result PDF Created Successfully!!",
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
                update: { question_name: item.question_name, question:item.question},
            },
        });
    });
   
        const result = await ResultPDF.bulkWrite(updateQueries);
    
        return {
            isSuccess: true,
            message: "Result PDF Created Successfully!!",
            data: result,
        };
    } catch (ex) {
        return { isSuccess: false, data: ex, message: "Something Went Wrong!!" };
    }
}



async function GetBy(id) {
    try {


        var result = await ResultPDF.find(
            id,
            // isDeleted: false,
        )
            .exec()
            .then(res => {
                if (res !== null) {
                    return { isSuccess: true, message: 'Result PDF Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'Invalid Result PDF ID!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Result PDF details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Result PDF!!', data: ex };
    }
}





async function Update(req) {
    try {
        var categoryId = req.params.id;
        var data = req.body;
        data.updatedDate = moment.utc();
        var result = await ResultPDF.findByIdAndUpdate(categoryId, data, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Result PDF Updated successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to Update Result PDF!!", data: err };
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to Update Result PDF!!", data: ex };
    }
}

async function Delete(req) {
    try {
        var categoryId = req.params.id;
        var result = await ResultPDF.findByIdAndUpdate({ _id: categoryId }, { isActive: false, isDeleted: true, updatedDate: moment.utc() }, { new: true })
            .then(res => {
                return { isSuccess: true, message: "Result PDF deleted successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to delete Result PDF!!", data: err }
            });
        return result;
    }
    catch (ex) {
        return { isSuccess: false, message: "Failed to delete Result PDF!!", data: ex };
    }
}

async function GetAllData() {
    try {
        var result = await ResultPDF.find()
            .then(res => {
                return { isSuccess: true, message: "Result PDF deleted successfully!!", data: res };
            })
            .catch(err => {
                return { isSuccess: false, message: "Failed to delete Result PDF!!", data: err }
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

        var count = await ResultPDF
            .where(filter)
            .count()
            .then(res => {
                return { isSuccess: true, data: res };
            });


        var result = await ResultPDF.find()
            .where(filter)
            .populate('participant_id', 'participantFirstName participantLastName participantTitle participantEmail participantMobile')
            .populate('template_id', 'templateName')
            .skip(skip)
            .limit(pageSize)
            .sort(sorting)
            .then(res => {
                return {
                    isSuccess: true,
                    message: 'Result PDF Retrived Successfully!!',
                    data: res,
                    currentPage: pageNumber,
                    pageSize: pageSize,
                    totalRecords: count.data
                };
            }).catch(err => {
                return {
                    isSuccess: false,
                    message: 'Failed to get Result PDF!!',
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
            message: 'Exception while getting Result PDF!!',
            data: ex,
            currentPage: pageNumber,
            pageSize: pageSize,
            totalRecords: 0
        };
    }
}


async function GetById(id) {
    try {
        var result = await ResultPDF.findOne({
            _id: id,
            isDeleted: false,
        })
        .populate('participant_id', 'participantFirstName participantLastName participantTitle participantEmail participantMobile')
        .populate('template_id', 'templateName')
            .exec()
            .then(res => {
                if (res !== null) {
                    return { isSuccess: true, message: 'Result PDF Retrived Successfully!!', data: res };
                }
                else {
                    return { isSuccess: false, message: 'Invalid Result PDF ID!!', data: res };
                }
            })
            .catch(err => {
                return { isSuccess: false, message: 'Not found Result PDF details!!', data: err };
            });
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Result PDF!!', data: ex };
    }
}

async function Patch(req) {
    try {
        var categoryId = req.params.id;
        var data = req.body;
        var result = await categoryPatchUpdate(categoryId, data);
        return result;
    } catch (ex) {
        return { isSuccess: false, message: 'Error to get Category!!', data: ex };
    }
}

async function categoryPatchUpdate(id, patchData) {
    try {
        if (patchData !== null) {
            patchData.updatedDate = moment.utc();
            let updateResult = await ResultPDF.findByIdAndUpdate({ _id: id }, { $set: patchData }, { new: true })
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
    getAll:GetAllData,
    find: GetBy,
    patch: Patch,
    bulkCreate: BulkCreate,
    bulkUpdate:BulkUpdate
}
