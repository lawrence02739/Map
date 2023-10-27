const express = require("express");
const router = express.Router();
const promptService = require("../../services/prompt/prompt.service");
const templateService = require("../../services/template/template.service");
const responsHelper = require('../../lib/responseHelper');
const { check ,validationResult } = require("express-validator");

// GET USER LIST
router.get("/", async (req, res) => {
    try {
        var result = await promptService.getAll(req);
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
        var result = await promptService.get(id);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


// CREATE USER
router.post("/", [
    // Validate required fields
    check('prompt').notEmpty().withMessage('prompt is required'),
    check('template_id').notEmpty().withMessage('template_id is required')
    ],async (req, res) => {
    try {
        const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors
    });
  }
        var validTempalte = await templateService.get(req.body.template_id)
        if (validTempalte.isSuccess == false) {
            return res.status(400).json({isSuccess: false, message: "Invalid Template Id" })
        }
        var result = await promptService.create(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// UPDATE USER
router.put("/:id", async (req, res) => {
    try {
        var result = await promptService.update(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
    try {
        var result = await promptService.delete(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.patch("/:id", async (req, res) => {
    try {
        var result = await promptService.patch(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


module.exports = router;
