let mongoose = require('mongoose');
const BaseSchemaFactory = require('../base.model');
const address = require('../common/address.model');

let participantSchema = BaseSchemaFactory({
    firstName: { type: String, required: true },
    lastName: { type : String, required: true },
    title : {type: String},
    fullName : { type : String },
    email: {
        type: String,
        required: true,        
        lowercase: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },    
    workshop: { type: mongoose.Schema.Types.ObjectId, ref: 'Workshop', required: true },
    address: {type:{address}},
    userType: {type: String},
    organizationName : {type: String},
    manager : {
        id : { type: mongoose.Schema.Types.ObjectId },
        name :  {type: String},
        title : { type: String }
    }
});


module.exports = mongoose.model('Participant', participantSchema);