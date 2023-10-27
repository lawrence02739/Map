let mongoose = require('mongoose');
const BaseSchemaFactory = require('../base.model');

let workShopSchema = BaseSchemaFactory({
    name: { type: String, required: true },
    workshopStartDate: { type : Date},
    workshopEndDate :  { type : Date},
    group_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
    workshopLeaderName : { type: String, required: true },
    workshopLeaderEmail : { type: String, required: true }
});


module.exports = mongoose.model('WorkShopnew', workShopSchema);