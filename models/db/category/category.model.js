let mongoose = require('mongoose');
const BaseSchemaFactory = require('../base.model');

let categorySchema = BaseSchemaFactory({
    type: { type: String, required: true, unique: true },    
    // abbreviation: { type: String, required: true, unique: true },    
    color: { type : String, unique: true},    
    sortOrder: { type : Number, unique: true}
});

module.exports = mongoose.model('Category', categorySchema);