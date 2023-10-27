const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const groupService = require("../../services/group/group");
const organizationService = require("../../services/organization/organization");
const templateService = require("../../services/template/template.service");
const workshopService = require("../../services/workShops/workshops.service");
const participantService = require("../../services/participe/participant.service");
const responsHelper = require('../../lib/responseHelper');
const { check, validationResult } = require("express-validator");


// GET USER LIST
router.get("/", async (req, res) => {
    try {
        var result = await groupService.getAll(req);
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
        var result = await groupService.get(id);
        if (result.data && result.data.id) {
            var workShopResult = await workshopService.find({ group_id: result.data.id, isDeleted: false });
            var participeResult = await participantService.find({ group_id: mongoose.Types.ObjectId(result.data.id), isDeleted: false });

            let resultValue = {
                group: result.data,
                workShop: workShopResult.data,
                participe: participeResult.data
            };
            result.data = resultValue;
            return responsHelper.SendResponse(res, result);
        } else {
            return responsHelper.SendErrorResponse("Invalid data in result", res);
        }


        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


// CREATE USER
router.post("/", [
    // Validate required fields
    check('groupName').notEmpty().withMessage('groupName is required'),
    check('createdBy_Id').notEmpty().withMessage('createdBy_Id is required'),
    check('groupOranization_id').notEmpty().withMessage('groupOranization_id is required'),
    check('tempalte_id').notEmpty().withMessage('tempalte_id is required'),
    check('feedbackDueDate').notEmpty().withMessage('feedbackDueDate is required')
], async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors
            });
        }
        // check valid organization
        var validOrg = await organizationService.get(req.body.groupOranization_id)
        if (validOrg.isSuccess == false) {
            return res.status(400).json({ isSuccess: false, message: "Invalid Oranization Id" })
        }
        // check valid template
        var validTemplate = await templateService.get(req.body.tempalte_id)
        if (validTemplate.isSuccess == false) {
            return res.status(400).json({ isSuccess: false, message: "Invalid Template Id" })
        }

        var result = await groupService.create(req);
        if (req.body.workShop_data) {

            req.body.workShop_data[0].group_id = result.data.id
            const data = {}
            data["body"] = req.body.workShop_data[0]
            var workShopResult = await workshopService.create(data);
            if (workShopResult.isSuccess == false) {
                return responsHelper.SendResponse(res, workShopResult);
            }

            let resultValue = {
                group: result.data,
                workShop: workShopResult.data
            };
            result.data = resultValue;
            result.data.workshop = workShopResult.data[0]

        }
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// UPDATE USER
router.put("/:id", async (req, res) => {
    try {
        var result = await groupService.update(req);
        if (req.body.workShop_data) {
            const data = {
                body:req.body.workShop_data,
                params:{
                    id:req.body.workShop_data.id
                }
            }
            await workshopService.update(data);
        }
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
    try {
        var result = await groupService.delete(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.patch("/:id", async (req, res) => {
    try {
        var result = await groupService.patch(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


module.exports = router;
