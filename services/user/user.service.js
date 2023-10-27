const mongoose = require('mongoose');
const pwd = require('../../lib/password');
const utcDateTime = require('../../lib/date');
const moment = require('moment');

// MODELS IMPORT
const User = require('../../models/db/user/user.model');
const Role = require('../../models/db/role/role.model');
const userserviceHelper = require('../../lib/userServiceHelper');
const EmailHelper = require('../../lib/email');

async function Create(user) {
  debugger;
  try {
    const userModel = new User(user);
    userModel._id = new mongoose.Types.ObjectId();
    // GENERATE AND HASH PASSWORD
    var genPWD = pwd.generateAndHashPassword();
    userModel.salt = genPWD.salt;
    userModel.password = genPWD.hash;
    userModel.fullName = user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1) + ' ' + user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1);
    userModel.userType = userModel.userType;
    userModel.createdDate = moment.utc();
    var user = await userModel.save()
      .then(result => {
        // SEND WELCOME EMAIL WITH PASSWORD 
        var sendEmailObj = {
          username: userModel.email,
          name: userModel.fullName,
          password: genPWD.password
        }
        var emailRes = EmailHelper.welcomeEmail(sendEmailObj);
        return { isSuccess: true, message: "User Created Successfully!!", data: result };
      }).catch(err => {
        return { isSuccess: false, message: "Failed to Created User!!", data: err };
      });
    return user;
  }
  catch (ex) {
    return { isSuccess: false, data: ex, message: "Something Went Worng!!" };
  }
}

async function Update(id, user) {
  try {
    var userModel = new User(user);
    userModel.updatedDate = moment.utc();
    var response = await User.findByIdAndUpdate(id, userModel, { new: true })
      .then(res => {
        return { isSuccess: true, message: "User Updated successfully!!", data: res };
      })
      .catch(err => {
        return { isSuccess: false, message: "Failed to Update User!!", data: err };
      });
    return response;
  }
  catch (ex) {
    return { isSuccess: false, message: "Failed to Update User!!", data: ex };
  }
}

async function Delete(id) {

  try {
    var response = await User.findByIdAndUpdate({ _id: id }, { isActive: false, isDeleted: true, updatedDate : moment.utc() }, { new: true })
      .then(res => {
        return { isSuccess: true, message: "User deleted successfully!!", data: res };
      })
      .catch(err => {
        return { isSuccess: false, message: "Failed to delete User!!", data: err }
      });
    return response;
  }
  catch (ex) {
    return { isSuccess: false, message: "Failed to delete User!!", data: ex };
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
    // if (req.query.fullName) filter.fullName = req.query.fullName;
    if (req.query.fullName) filter.fullName = { $regex: '.*' + req.query.fullName + '.*', $options: 'i' };
    filter.isDeleted= false;

    if (req.query.sortBy && req.query.orderBy) {
      let sortByList = req.query.sortBy.split(",");
      let orderByList = req.query.orderBy.split(",");

      for (let i = 0; i < sortByList.length; i++) {
        let sortField = sortByList[i];
        sorting[sortField] = orderByList[i] === "desc" ? -1 : 1;
      }
    }

    var count = await User.where(filter)
      .count()
      .then(res => {
        return { isSuccess: true, data: res };
      });


    var response = await User.find()
      .where(filter)
      .populate('role')
      .populate('createdBy', 'firstName lastName fullName email profileImageURL')
      .populate('updatedBy', 'firstName lastName fullName email profileImageURL')
      .skip(skip)
      .limit(pageSize)
      .sort(sorting)
      .then(res => {
        return {
          isSuccess: true,
          message: 'Users Retrived Successfully!!',
          data: res,
          currentPage: pageNumber,
          pageSize: pageSize,
          totalRecords: count.data
        };
      }).catch(err => {
        return {
          isSuccess: false,
          message: 'Failed to get Users!!',
          data: err,
          currentPage: pageNumber,
          pageSize: pageSize,
          totalRecords: 0
        };
      });
    return response;
  } catch (ex) {
    return {
      isSuccess: false,
      message: 'Failed to get Users!!',
      data: ex,
      currentPage: pageNumber,
      pageSize: pageSize,
      totalRecords: 0
    };
  }
}

async function GetById(id) {
  try {
    var response = await User.findById(id)
      .populate('role')
      .exec()
      .then(res => {
        if (res !== null) {
          return { isSuccess: true, message: 'User Retrived Successfully!!', data: res };
        }
        else {
          return { isSuccess: false, message: 'Invalid User ID!!', data: res };
        }
      })
      .catch(err => {
        return { isSuccess: false, message: 'Invalid User ID!!', data: err };
      });
    return response;
  } catch (ex) {
    return { isSuccess: false, message: 'Error to get User!!', data: ex };
  }
}

async function GetAllRoles(req) {
  try {
    var roleType = req.query.type;
    var filter = {};
    if (roleType) filter.type = roleType.toLowerCase();

    var roleResponse = await Role.find()
      .where(filter)
      .exec()
      .then(docs => {
        return { isSuccess: true, data: docs };
      }).catch(err => {
        return { isSuccess: false, data: err };
      });

    return roleResponse;
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}

async function GetRole(id) {
  try {

    let filter = {};
    if (mongoose.Types.ObjectId.isValid(id)) {
      filter._id = id;
    }

    var roleResponse = await Role.find()
      .where(filter)
      .exec()
      .then(doc => {
        return { isSuccess: true, data: doc };
      }).catch(err => {
        return { isSuccess: false, data: err };
      });

    return roleResponse;
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}

async function PatchUpdate(userId, userPatchData) {
  try {
    const updatePatchData = {};
    for (let item of userPatchData) {
      updatePatchData[item.key] = item.value;
    }
    updatePatchData['updatedDate'] = moment.utc();
    let updateResult = await userserviceHelper.patchUpdate(userId, updatePatchData);
    return updateResult;
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}


async function ChangePassword(data) {
  try {
    let patchUpdateObj = {};

    let getUserdetails = await GetById(data.id)
    if (getUserdetails == null) {
      // Invalid ID
      return { isSuccess: false, data: {}, message: "Invalid Id" }
    }

    if (getUserdetails.isSuccess) {
      let isPwdHashMatch = pwd.validateUserPassword(data.oldPassword, getUserdetails.data.password, getUserdetails.data.salt);

      if (!isPwdHashMatch) { /// old Password not Matched
        return { isSuccess: false, data: {}, message: "Old Password does not match!!" }
      }
      var genPWD = pwd.hashUserPassword(data.newPassword);

      patchUpdateObj.password = genPWD.hash;
      patchUpdateObj.salt = genPWD.salt;
      patchUpdateObj.updatedDate = moment.utc();
      /// update Password
      let updateChangePasswordResult = await userserviceHelper.patchUpdate(data.id, patchUpdateObj);

      if (updateChangePasswordResult.isSuccess) {
        updateChangePasswordResult.message = "Password Changed Successfully!!";
      }
      else {
        updateChangePasswordResult.message = "Failed to Update Password!!";
      }
      return updateChangePasswordResult;
    }
    else {
      return { isSuccess: false, data: {}, message: "Invalid ID!!" }
    }

  } catch (error) {
    return { isSuccess: false, data: error };
  }
}

async function UpdateProfile(id, data) {
  try {
    // Check the Email if Exist or not in seperate Function 
    var isEmailExist = await userserviceHelper.userEmailExist(data.email);

    if (!isEmailExist) {
      // retrun the exist message
    }
    var userPatchData = mapUserDetails(data);

    var userUpdateResult = await userserviceHelper.patchUpdate(id, userPatchData);
    return { isSuccess: userUpdateResult.isSuccess, message: userUpdateResult.message, data: userUpdateResult.data };

  } catch (error) {
    return {
      isSuccess: false,
      message: "Updated Failed",
      error: error
    };
  }

}

function mapUserDetails(data) {
  var userPatchData = {
    firstName: data.firstName,
    lastName: data.lastName,
    fullName: data.firstName + ' ' + data.lastName,
    email: data.email,
    role: data.role,
    address: {
      zipcode: data.address.zipcode,
      state: data.address.state,
      city: data.address.city,
      mobile: data.address.mobile,
      addressLine: data.address.addressLine
    },
    updatedDate: moment.utc(),
    profileImageURL: data.profileImageURL
  }
  return userPatchData;
}

module.exports = {
  createuser: Create,
  updateUser: Update,
  deleteUser: Delete,
  getAllUsers: GetAll,
  getByUserId: GetById,
  getAllRoles: GetAllRoles,
  getRole: GetRole,
  patchUpdate: PatchUpdate,
  changePassword: ChangePassword,
  updateProfile: UpdateProfile,
}
