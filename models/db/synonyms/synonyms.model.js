let mongoose = require('mongoose');
const BaseSchemaFactory = require('../base.model');


let synonymsSchema = BaseSchemaFactory({
    type: {type : String},
    userId:{ type: mongoose.Schema.Types.ObjectId },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    synonyms: [{ type: String }],
    createdBy:{ type : mongoose.Schema.Types.ObjectId},
    updatedBy : { type : mongoose.Schema.Types.ObjectId},
    lastUpdatedOn :{type : Date}
});




module.exports = mongoose.model('Synonyms', synonymsSchema);
