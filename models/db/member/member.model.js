let mongoose = require('mongoose');
const BaseSchemaFactory = require('../base.model')

let memberSchema = BaseSchemaFactory({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },  
    participant_id: {  type: mongoose.Schema.Types.ObjectId, ref: 'Participe'},
    template_id: {  type: mongoose.Schema.Types.ObjectId, ref: 'Template'},
    group_id: {  type: mongoose.Schema.Types.ObjectId, ref: 'Group'},
    title:{ type: String, required: true },   
    catogory:{ type: String},
    responsed:{ type: Boolean, default: false }

});

module.exports = mongoose.model('Member', memberSchema);