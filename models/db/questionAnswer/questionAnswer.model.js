let mongoose = require('mongoose');
const BaseSchemaFactory = require('../base.model')

let questionSchema = BaseSchemaFactory({
    member_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
    participant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Participe' },
    question_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    questionAnswer:{ type: String, required: true },

});

module.exports = mongoose.model('QuestionAnswer', questionSchema);