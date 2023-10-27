const User = require('../models/db/user/user.model');


async function UserPatchUpdate(id, patchData) {
    try {
        if (patchData !== null) {
            let updateResult = await User.update({ _id: id }, { $set: patchData })
            return { isSuccess: true, message: 'Updated Successfully!!', data: updateResult };
        }
        else {
            return { isSuccess: false, message: 'Invalid data!!', data: {} };
        }

    } catch (error) {
        return { isSuccess: false, message: 'Invalid data!!', data: error }
    }
}


async function UserEmailExist(email) {
    try {
        if (email === null) {
            return false;
        }

        await User.findOne({ email: email }).exec().then(doc => {
            if (doc !== null) {
                return true;
            }
            else {
                return false;
            }
        }).catch(err => {
            return false;
        })
    } catch (error) {
        return false;
    }
}




module.exports = {
    patchUpdate: UserPatchUpdate,
    userEmailExist: UserEmailExist
}