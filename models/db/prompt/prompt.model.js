let mongoose = require('mongoose');
const BaseSchemaFactory = require('../base.model')

let promptSchema = BaseSchemaFactory({
    template_id: { type: String, required: true },
    prompt: { type: String, required: true },
});

module.exports = mongoose.model('Prompt', promptSchema);