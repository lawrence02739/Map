const express = require("express");
const router = express.Router();
const organizationService = require("../../services/organization/organization");
const groupModel = require('../../models/db/group/group.model');
const groupService=require('../../services/group/group')

const responsHelper = require('../../lib/responseHelper');
const { check ,validationResult } = require("express-validator");

// GET USER LIST
router.get("/", async (req, res) => {
    try {
        var result = await organizationService.getAll(req);
        if (result.isSuccess) {
            return res.status(200).json(result);
        }
        else {
            return res.status(400).json(result);
        }
    } catch (err) {
        return res.status(500).json({
            isSuccess: false,
            message: "Something Went Wrong.",
            data: err
        });
    }
});

// GET BY ID
router.get("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        // DO VALIDATION NEEDED
        var result = await organizationService.get(id);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


// CREATE USER
router.post("/",[
    // Validate required fields
    check('organizationName').notEmpty().withMessage('organizationName is required'),
    check('address').notEmpty().withMessage('Address is required'),
    check('city').notEmpty().withMessage('City is required'),
    check('state').notEmpty().withMessage('State is required'),
    // check('zipcode').notEmpty().withMessage('Zipcode is required'),
    check('country').notEmpty().withMessage('Country is required')
  ], async (req, res) => {
    try {
        const errors = validationResult(req);
  

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors
    });
  }
        var result = await organizationService.create(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// UPDATE USER
router.put("/:id",[
    // Validate required fields
    check('organisationName').optional(),
    check('organisationAddress').optional(),
    check('organisationCity').optional(),
    check('organisationState').optional(),
    check('organisationZipcode').optional(),
    check('organisationCountry').optional(),
  ], async (req, res) => {
    try {
        const errors = validationResult(req);
      
        if (!errors.isEmpty()) {
          return res.status(400).json({
            success: false,
            errors: errors
          });
        }
        var result = await organizationService.update(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
    try {
        let validGroup = await groupService.getOne({groupOranization_id:req.params.id,isDeleted: false})
         if(validGroup.isSuccess==true){
            return res.status(400).json({ isSuccess: false, message: "The Organization ID has already been associated with a group and, therefore, cannot be deleted" })
        }
        var result = await organizationService.delete(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.patch("/:id", async (req, res) => {
    try {
        var result = await organizationService.patch(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


module.exports = router;
