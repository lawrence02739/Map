let mongoose = require('mongoose');

let roleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    displayName: String,   
    permissions: {type:[Object]},
    isActive: { type:Boolean, default:false},
    isDeleted: { type:Boolean, default:false},
})

module.exports = mongoose.model('Role', roleSchema);