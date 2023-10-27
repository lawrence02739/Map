const mongoose = require('mongoose');
const utcDateTime = require('../../lib/date');

const BaseSchemaFactory = (schemaDefinition) => {
    return new mongoose.Schema({      
        _id: mongoose.Schema.Types.ObjectId,
        createdDate: {type: Date, default: utcDateTime},
        updatedDate: {type: Date, default: utcDateTime},
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        isActive:{ type: Boolean, default: true },
        isDeleted: { type: Boolean, default: false },
        // spread/merge passed in schema definition
        ...schemaDefinition    
    });
  }
  module.exports = BaseSchemaFactory; 