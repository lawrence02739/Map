const express = require("express");
const router = express.Router();

const resultPdfService = require("../../services/resultPDF/result.service");
const templateService = require("../../services/template/template.service");
const responsHelper = require('../../lib/responseHelper');
const { check ,validationResult } = require("express-validator");
const participantService = require("../../services/participe/participant.service");
const fileUpload =require('../../lib/fileUpload')
// GET USER LIST
router.get("/", async (req, res) => {
    try {
        var result = await resultPdfService.getAll(req);
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
        var result = await resultPdfService.get(id);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


// CREATE USER
router.post("/",  [
    // Validate required fields
    check('template_id').notEmpty().withMessage('templateName is required'),
    check('participant_id').notEmpty().withMessage('participant_id is required'),
    check('fileName').notEmpty().withMessage('fileName is required')
], async (req, res) => {

    try {
        const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors
    });
  }

        var result = await resultPdfService.create(req);
        if(result.isSuccess==true){
            const data={
                params:{id:req.body.participant_id},
                body:{
                    resultPdf:true
                }
            }
            await participantService.update(data);
        }
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// UPDATE USER
router.put("/:id", async (req, res) => {
    try {
        var result = await resultPdfService.update(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
    try {
        var result = await resultPdfService.delete(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.patch("/:id", async (req, res) => {
    try {
        var result = await resultPdfService.patch(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


module.exports = router;
