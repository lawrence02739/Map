const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const participantService = require("../../services/participe/participant.service");
const memberService = require("../../services/member/member");
const responsHelper = require('../../lib/responseHelper');
const groupService = require("../../services/group/group");
const EmailHelper = require('../../lib/email');
const { check, validationResult } = require("express-validator");


// GET USER LIST
router.get("/", async (req, res) => {
    try {
        var result = await participantService.getAll(req);
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
        var result = await participantService.find({_id: mongoose.Types.ObjectId(id), isDeleted: false });

        return responsHelper.SendResponse(res, result);

    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


// CREATE USER
router.post("/", [
    // Validate required fields
    check('participantFirstName').notEmpty().withMessage('participantFirstName is required'),
    check('participantLastName').notEmpty().withMessage('participantLastName is required'),
    check('participantTitle').notEmpty().withMessage('participantTitle is required'),
    check('participantEmail').isEmail().withMessage('put correct format').notEmpty().withMessage('participantEmail is required'),
    check('participantMobile').notEmpty().withMessage('participantMobile is required'),
    check('group_id').notEmpty().withMessage('group_id is required'),
], async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors
            });
        }

        let validGroup = await groupService.get(req.body.group_id)
        if (validGroup.isSuccess == false) {
            return res.status(400).json({ isSuccess: false, message: "Invalid Group" })
        }
        var result = await participantService.create(req);

        var sendEmailObj = {
            username: req.body.participantEmail,
            name: req.body.participantFirstName,
            type: "Participant",
            template: validGroup.data.tempalte_id.id,
            link: `${process.env.BASEURL}/#/notification?type=Participant&template=` + validGroup.data.tempalte_id.id + `&participantId=` + result.data.id +`&groupId=`+req.body.group_id
        }
        var emailRes = EmailHelper.templateEmail(sendEmailObj);

        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// UPDATE USER
router.put("/:id", [check('participantEmail').optional().isEmail().withMessage('must be email')], async (req, res) => {
    try {
        if (req.body.participantEmail) {
            var participe = await participantService.find({ _id: mongoose.Types.ObjectId(req.params.id), isDeleted: false });
            let validGroup = await groupService.get(participe.data[0].group_id)
            if (validGroup.isSuccess == false) {
                return res.status(400).json({ isSuccess: false, message: "Invalid Group" })
            }
            var sendEmailObj = {
                username: req.body.participantEmail,
                name: participe.data[0].participantFirstName,
                type: "Participant",
                template: validGroup.data.tempalte_id.id,
                link: `${process.env.BASEURL}/#/notification?type=Participant&template=` + validGroup.data.tempalte_id.id + `&participantId=` + req.body.id +`&groupId=`+participe.data[0].group_id
            }
            var emailRes = EmailHelper.templateEmail(sendEmailObj);
        }
        var result = await participantService.update(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
    try {
        var result = await participantService.delete(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.patch("/:id", async (req, res) => {
    try {
        var result = await participantService.patch(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


module.exports = router;
