let mongoose = require('mongoose');
const BaseSchemaFactory = require('../base.model')

let templateSchema = BaseSchemaFactory({
    templateName: { type: String , required: true, },
    position: { type: Number, default: 0 } 
});

templateSchema.pre('save', async function(next) {
    if (this.isNew) {
        const highestPosition = await this.constructor.findOne({isDeleted:false}, 'position', { sort: { position: -1 } }).exec();
        this.position = highestPosition ? highestPosition.position + 1 : 1; // Increment the position
    }
    next();
});

module.exports = mongoose.model('Template', templateSchema);