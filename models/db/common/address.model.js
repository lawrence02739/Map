const mongoose = require('mongoose');

// const address = () => {
//     return new mongoose.Schema({   
//         mobile: { type: String , maxlength: 20},
//         city: { type: String },
//         state: { type: String },
//         zipcode:{ type: String }, 
//     });
//   }

  
const address = new mongoose.Schema({ 
    addressLine :{
        type: String 
    },
    mobile: { 
        type: String 
    },
    city: { 
        type: String
    },     
    state: {
        type: String,       
    },
    zipcode: {
        type: String,        
    },
    country: {
        type: String,        
    }
});
  module.exports = address; 