let mongoose = require('mongoose');
const BaseSchemaFactory = require('../base.model')

let groupSchema = BaseSchemaFactory({
    groupName: { type: String, required: true },
    createdBy_Id: { type: String, required: true },
    groupOranization_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' }],
    tempalte_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Template'  },
    feedbackDueDate: { type: String, required: true },
    createdDate: { type: String },
    workShop_id: { type: String, required: false },

});

module.exports = mongoose.model('Group', groupSchema);