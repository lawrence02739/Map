const express = require("express");
const router = express.Router();
const workshopService = require("../../services/workShops/workshops.service");
const responsHelper = require('../../lib/responseHelper');
const { check ,validationResult } = require("express-validator");


// GET Questionaire LIST
router.get("/", async (req, res) => {
  try {
    var result = await workshopService.getAll(req);
    if (result.isSuccess) {
      return res.status(200).json(result);
    }
    else{
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
    var result = await workshopService.get(id);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});


// CREATE Questionaire
router.post("/", [
  // Validate required fields
  check('group_id').notEmpty().withMessage('group_id is required'),
  check('workshopLeaderName').notEmpty().withMessage('workshopLeaderName is required'),
  check('name').notEmpty().withMessage('name is required'),
  check('workshopStartDate').notEmpty().withMessage('workshopStartDate is required'),
  check('workshopEndDate').notEmpty().withMessage('workshopEndDate is required'),
  check('workshopLeaderEmail').isEmail().withMessage('must be a email').notEmpty().withMessage('workshopLeaderEmail is required'),
], async (req, res) => {
  try {  
    const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors
    });
  }    
    var result = await workshopService.create(req);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});

// UPDATE USER
router.put("/:id", [check('workshopLeaderEmail').optional().isEmail().withMessage('must be a email')], async (req, res) => {
  try { 
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors
      });
    }    
    // DO VALIDATION NEEDED
    var result = await workshopService.update(req);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  try {
    var result = await workshopService.delete(req);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});

router.patch("/:id", async (req, res) => {
  try {
      var result = await workshopService.patch(req);
      return responsHelper.SendResponse(res, result);
  } catch (err) {
      return responsHelper.SendErrorResponse(err, res);
  }
});

module.exports = router;
