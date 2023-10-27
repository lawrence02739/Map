const express = require("express");
const router = express.Router();
const memberService = require("../../services/member/member");
const participantService = require("../../services/participe/participant.service");
const groupService = require("../../services/group/group");
const responsHelper = require('../../lib/responseHelper');
const { check, validationResult } = require("express-validator");
const EmailHelper = require('../../lib/email');


// GET USER LIST
router.get("/", async (req, res) => {
    try {
        var result = await memberService.getAll(req);
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
        var result = await memberService.get(id);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


// CREATE USER
router.post("/", [
    // Validate required fields
    check('firstName').notEmpty().withMessage('firstName is required'),
    check('lastName').notEmpty().withMessage('lastName is required'),
    check('email').notEmpty().withMessage('email is required').isEmail().withMessage('Must be an Email'),
    check('mobile').notEmpty().withMessage('mobile is required'),
    check('participant_id').notEmpty().withMessage('participant_id is required'),
    check('template_id').notEmpty().withMessage('template_id is required'),
    check('catogory').notEmpty().withMessage('catogory_id is required'),
], async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors
            });
        }

        let validParticipant = await participantService.get(req.body.participant_id)

        if (validParticipant.isSuccess == false) {
            return res.status(400).json({ isSuccess: false, message: "Invalid Participant" })
        }
        
        let template_id = await groupService.get(validParticipant.data.group_id.id)
        if (template_id.isSuccess == false) {
            return res.status(400).json({ isSuccess: false, message: "Invalid Template" })
        }

        var result = await memberService.create(req);

        var sendEmailObj = {
            username:req.body.email,
            name: req.body.firstName,
            type:"Member",
            template: template_id,
            link: `${process.env.BASEURL}/#/notification?type=Member&template=`+template_id.data.tempalte_id._id + `&memberId=` + result.data._id+`&groupId=`+ validParticipant.data.group_id.id
        }
        var emailRes = EmailHelper.templateEmail(sendEmailObj);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


// CREATE USER
router.post("/bulkCreate", [
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors
            });
        }
        let validParticipant = await participantService.get(req.body[0].participant_id)

        if (validParticipant.isSuccess == false) {
            return res.status(400).json({ isSuccess: false, message: "Invalid Participant Id" })
        }
        let template_id = await groupService.get(validParticipant.data.group_id.id)
        if (template_id.isSuccess == false) {
            return res.status(400).json({ isSuccess: false, message: "Invalid Template" })
        }
        var result = await memberService.bulkCreate(req);
        
        result.data.forEach(x => {
            const sendEmailObj = {
                username: x.email,
                name: x.firstName,
                type:"Member",
                template: template_id.data.tempalte_id.id,
                link: `${process.env.BASEURL}/#/notification?type=Member&template=` + template_id.data.tempalte_id.id + `&memberId=` + x.id + `&groupId=` + validParticipant.data.group_id.id 
            };
            const emailRes = EmailHelper.templateEmail(sendEmailObj);
        });

        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// UPDATE USER
router.post("/bulkUpdate", [
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors
            });
        }
        var result = await memberService.bulkUpdate(req);

        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// UPDATE USER
router.put("/:id", [check('email').optional().isEmail().withMessage('must be email')], async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors
            });
        }
        if (req.body.email) {
            var member = await memberService.get(req.params.id);
            var sendEmailObj = {
                username: req.body.email,
                name: req.body.firstName,
                type: "Member",
                template: member.data.template_id._id,
                link: `${process.env.BASEURL}/#/notification?type=Member&template=` + member.data.template_id._id + `&memberId=` + req.params.id + `&groupId=` + member.data.group_id
            }
            var emailRes = EmailHelper.templateEmail(sendEmailObj);
        }
        var result = await memberService.update(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
    try {
        var result = await memberService.delete(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.patch("/:id", async (req, res) => {
    try {
        var result = await memberService.patch(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


module.exports = router;
