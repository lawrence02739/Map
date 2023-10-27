const express = require("express");
const router = express.Router();
const questionService = require("../../services/question/question.service");
const templateService = require("../../services/template/template.service");
const responsHelper = require('../../lib/responseHelper');
const { check ,validationResult } = require("express-validator");

// GET USER LIST
router.get("/", async (req, res) => {
    try {
        var result = await questionService.getAll(req);
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
        var result = await questionService.get(id);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


// CREATE USER
router.post("/",  [
    // Validate required fields
    check('templateName').notEmpty().withMessage('templateName is required'),
    check('question_name').notEmpty().withMessage('question_name is required'),
    check('question').notEmpty().withMessage('question is required'),
    check('template_id').notEmpty().withMessage('template_id is required')
], async (req, res) => {

    try {
        const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors
    });
  }
       let checktem = await templateService.get(req.body.template_id)
       if(checktem.isSuccess == false){
        return res.status(404).json({isSuccess: false, message: "Invalid Template Id" })
       }
        var result = await questionService.create(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// UPDATE USER
router.put("/", async (req, res) => {
    try {
        var result = await questionService.bulkUpdate(req.body);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
    try {
        var result = await questionService.delete(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.patch("/:id", async (req, res) => {
    try {
        var result = await questionService.patch(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


module.exports = router;
