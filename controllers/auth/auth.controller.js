const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const Validator = require("../../lib/checkReqValidation");
const AuthServices = require('../../services/auth/auth.service');
const responsHelper = require('../../lib/responseHelper');


// LOGIN FOR ALL USERS
router.post('/signin', [check('email').exists(), check('password').isLength({ min: 2 })], async (req, res) => {
    const errors = Validator.validateAPIRequest(req);
    if (errors != "") {
        return res.status(400).json({
            message: 'Invalid Request',
            data: errors
        });
    }
    try {
        const loginData = req.body;
        let response = await AuthServices.validateUser(loginData.email, loginData.password);
        return responsHelper.SendResponse(res, response);
    }
    catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// // USER SINGUP
// router.post('/signup', [ check('email').exists()], async (req, res)=>{   

//     const errors = Validator.validateAPIRequest(req);
//     if( errors!= ""){        
//         return res.status(400).json({
//             isSuccess : false,
//             message : 'Invalid Request',
//             data : errors            
//         });
//     }
//     try{        
//         const userData = req.body;
//         // Need do extra Validation Here        
//         let response =  await AuthServices.createUser(userData);
//         return responsHelper.SendResponse(res, response);        
//     }
//     catch(err){
//         return responsHelper.SendErrorResponse(err,res);
//     }   
// });

// User forgot password
router.post('/forgot', [check('email').exists()], async (req, res) => {
    const errors = Validator.validateAPIRequest(req);
    if (errors != "") {
        return res.status(400).json({
            isSuccess: false,
            message: 'Invalid Request',
            data: errors
        });
    }
    try {
        var email = req.body.email;
        var forgotPasswordResult = await AuthServices.forgotPassword(email)
        return responsHelper.SendResponse(res, forgotPasswordResult);
    }
    catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

module.exports = router;