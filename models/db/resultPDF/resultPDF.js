let mongoose = require('mongoose');
const BaseSchemaFactory = require('../base.model')

let questionSchema = BaseSchemaFactory({
    participant_id: {  type: mongoose.Schema.Types.ObjectId, ref: 'Participe'},
    template_id: {  type: mongoose.Schema.Types.ObjectId, ref: 'Template'},
    fileName:{type: String},
    text:{type: String}, 
});

module.exports = mongoose.model('resultPDF', questionSchema);