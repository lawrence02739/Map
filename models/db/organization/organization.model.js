let mongoose = require('mongoose');
const BaseSchemaFactory = require('../base.model')

let organizationSchema = BaseSchemaFactory({
    organizationName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },

});

module.exports = mongoose.model('Organization', organizationSchema);