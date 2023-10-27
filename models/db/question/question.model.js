let mongoose = require('mongoose');
const BaseSchemaFactory = require('../base.model')

let questionSchema = BaseSchemaFactory({
    // templateName: { type: String, required: true },
    template_id: { type: String, required: true },
    question_name: { type: String},
    question: { type: String, required: true },
    position: { type: Number, default: 0 } 

});

questionSchema.pre('save', async function(next) {
    if (this.isNew) {
        const highestPosition = await this.constructor.findOne({isDeleted:false,template_id:this.template_id}, 'position', { sort: { position: -1 } }).exec();
        this.position = highestPosition ? highestPosition.position + 1 : 1; // Increment the position
    }
    next();
});
module.exports = mongoose.model('Question', questionSchema);