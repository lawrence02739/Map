const { validationResult } = require('express-validator');


function ValidateAPIRequest(req){

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return  errors.array();
    }
    return "";    
}

module.exports = {
    validateAPIRequest :  ValidateAPIRequest
}