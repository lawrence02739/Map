let mongoose = require('mongoose');
const BaseSchemaFactory = require('../base.model');


const FileSchema = new mongoose.Schema({
    originalFileName: { type: String },
    fileName: { type: String },
    fileExt: { type: String },
    url: { type: String },
});

let questionaireSchema = BaseSchemaFactory({
    workshop: { type: mongoose.Schema.Types.ObjectId, ref: 'Workshop', required: true },
    participant:{ type: mongoose.Schema.Types.ObjectId, ref: 'Participant', required: true },
    file: {type : FileSchema},
    summary: [],
    analysedPdf : {
        type : FileSchema
    },
    status: {type : String},
    results: []
});

module.exports = mongoose.model('Questionaire', questionaireSchema);