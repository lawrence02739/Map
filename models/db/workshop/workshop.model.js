let mongoose = require('mongoose');
const BaseSchemaFactory = require('../base.model');

let workShopSchema = BaseSchemaFactory({
    name: { type: String, required: true,unique:true },
    workshopDate: { type : Date},
    dueDate :  { type : Date},
    conductedBy : { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});


module.exports = mongoose.model('Workshop', workShopSchema);