const mongoose = require('mongoose');
const pwd = require('../../lib/password');
const jwt = require('../../lib/generateJWTToken');
const uniqid = require('uniqid');
const EmailService = require('../../lib/email');
const userPatchUpdate = require('../../lib/userServiceHelper');

// MODELS IMPORTS
const User = require('../../models/db/user/user.model');
const Role = require('../../models/db/role/role.model');


async function ValidateUser(email, password) {
    try {
        const user = await User.findOne({ email: email })
            .where({ isDeleted: false })
            .populate('role')
            .exec();

        if (user == null) {
            return { isSuccess: false, data: {}, message: "Can't Find the User!!" };
        }       
        if (!user.isActive) {
            return { isSuccess: false, data: {}, message: "User is Temporary InActive, Please contact Adminstrator!!" };
        }

        if (user) {
            let isPwdHashMatch = pwd.validateUserPassword(password, user.password, user.salt);
            if (isPwdHashMatch) {
                // GENERATE TOKEN
                let token = jwt.generateUserToken(user.email, user.role, user._id);

                return {
                    isSuccess: true,
                    data: {
                        id: user._id,
                        token: token,
                        role: user.role,
                        userName: user.fullName,
                        userType: user.userType,
                        profileImage: user.profileImageURL,
                        isGlobalSynonymEdit: user.isGlobalSynonymEdit
                    }
                };
            }
            return { isSuccess: false, message: "Invalid Password", data: {} };
        }
        return { isSuccess: false, message:"Invalid Email", data: {} };
    }
    catch (ex) {        
        return { isSuccess: false, message:"Invalid Email", data: {} };
    }
}

async function CreateUser(user) {
    try {
        const userModel = new User(user);
        userModel._id = new mongoose.Types.ObjectId();
        var user = { isSuccess: false, data: {} };
        // HASH PASSWORD
        var genPWD = await pwd.hashUserPassword(userModel.password);
        userModel.salt = genPWD.salt;
        userModel.password = genPWD.hash;
        userModel.userType = userModel.userType;

        try {
            // GET user ROLE ID
            var role = await Role.findOne({ name: userModel.userType });
            if (role) {
                userModel.role = role._id;               

                var user = await userModel.save()
                    .then(result => {
                        return { isSuccess: true, message:"Admin Created Successfully!!", data: result };
                    }).catch(err => {
                        return { isSuccess: false, message:"Failed to Created Admin!!", data: err };
                    });
            }
            return user;
        } catch (err) {
            return { isSuccess: false, data: { code: err.code, errmsg: err.code == 11000 ? "Email Already Exists" : err.errmsg },message : '' };
        }
    }
    catch (ex) {
        return { isSuccess: false, message:"Failed to Create Admin!!", data: ex };
    }
}

async function ForgotPassword(email) {
    try {
        // Get User by Email
        const user = await User.findOne({ email: email });
        // Generate Password
        var temporarayPassword = uniqid.time();
        // Convert into Hash Password
        var hashPasswordObj = await pwd.hashUserPassword(temporarayPassword);
        user.salt = hashPasswordObj.salt;
        user.password = hashPasswordObj.hash; 
        // send mail

        var emailData = {
            name: user.firstName + ' ' + user.lastName,
            username: user.email,
            password: temporarayPassword,
        };

        var updatePatchData = {
            password: hashPasswordObj.hash,
            salt: hashPasswordObj.salt,
        };
        var emailResult = EmailService.tempPasswordEmail(emailData);
        // update password to user
        var updateReusult = await userPatchUpdate.patchUpdate(user._id, updatePatchData);
        if (updateReusult.isSuccess) {
            return { isSuccess: true, message: "Temp Passoword Updated Successfully!!", data: updateReusult.data }
        }
        else {
            return { isSuccess: false, message: "Failed to update Temp Password!!", data: updateReusult.data }
        }

    }
    catch (ex) {        
        return { isSuccess: false, message: "Failed to update Temp Password!!", data: ex }
    }
}









module.exports = {
    validateUser: ValidateUser,
    createUser: CreateUser,
    forgotPassword: ForgotPassword

}