let mongoose = require('mongoose');
const BaseSchemaFactory = require('../base.model')

let participantSchema = BaseSchemaFactory({
    participantFirstName: { type: String, required: true },
    participantLastName: { type: String, required: true },
    participantTitle: { type: String, required: true },
    participantEmail: { type: String, required: true },
    participantMobile: { type: String, required: true },
    group_id : { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
    catogory:{ type: String, default: "self" },
    responsed:{ type: Boolean, default: false },
    resultPdf:{ type: Boolean, default: false },
    aggregatePdf:{ type: Boolean, default: false },
    prompt:{ type: String },
});

module.exports = mongoose.model('Participe', participantSchema);