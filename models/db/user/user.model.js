let mongoose = require('mongoose');
const BaseSchemaFactory = require('../base.model')
const address = require('../common/address.model')

let userSchema = BaseSchemaFactory({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    fullName:{type: String},
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true},
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
    address: {type:{address}},
    salt: {type: String},
    isSuperAdmin:{type:Boolean, default:false},
    userType: {type: String, required: true },
    profileImageURL : {type: String },
    isGlobalSynonymEdit:{type:Boolean, default:false},
});

module.exports = mongoose.model('User', userSchema);