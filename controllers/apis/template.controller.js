const express = require("express");
const router = express.Router();
const templateService = require("../../services/template/template.service");
const questionService = require("../../services/question/question.service");
const promptService = require("../../services/prompt/prompt.service");
const groupModel = require('../../models/db/group/group.model');
const groupService=require('../../services/group/group')
const responsHelper = require('../../lib/responseHelper');
const { check, validationResult } = require("express-validator");


// GET TEMPLATE LIST
router.get("/", async (req, res) => {
    try {

        var result = await templateService.getAll(req);
        if (result.isSuccess == true) {
            req.query = null
            let questionData = await questionService.findAll()
            let resultData = await result.data.map((i) => {
                return Object.assign({}, {
                    _id: i._id,
                    createdDate: i.createdDate,
                    updatedDate: i.updatedDate,
                    isActive: i.isActive,
                    isDeleted: i.isDeleted,
                    templateName: i.templateName,
                    position:i.position,
                    questionCount: questionData.data.filter((y) => { return y.template_id == i.id }).length

                })
            })
            result.data = resultData

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
        var result = await templateService.get(id);

        if (result.data && result.data.id) {
            var questionResult = await questionService.find({ template_id: result.data.id, isDeleted: false });
            var promtResult = await promptService.find({ template_id: result.data.id, isDeleted: false });
            let resultValue = {
                temple: result.data,
                question: questionResult.data,
                prompt: promtResult.data
            };
            result.data = resultValue;
            return responsHelper.SendResponse(res, result);
        } else {
            return responsHelper.SendErrorResponse("Invalid TemplateId", res);
        }
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


// CREATE USER
router.post("/", [
    check('templateName').notEmpty().withMessage('TemplateName is required'),
    check('question_data').optional().isArray().withMessage('Question data must be an array'),
    check('prompt').optional().isString().withMessage('Prompt data must be an String')
], async (req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors
            });
        }

        var result = await templateService.create(req)

        if (req.body.question_data) {
            let id = result.data.id
            let tempName = result.data.templateName
            let questionData = req.body.question_data

            questionData = questionData.map(question => ({
                ...question,
                template_id: id,
                // templateName: tempName,
            }));

            const questionModel = await questionService.bulkCreate(questionData)
        }

        if (req.body.prompt) {
            let id = result.data.id
            let prompt = {
                prompt: req.body.prompt,
                template_id: id,
            }
            const promtmodel = await promptService.create(prompt)
        }


        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// UPDATE USER
router.put("/:id", async (req, res) => {
    try {
        var result = await templateService.update(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
    try {
        let validGroup = await groupService.getOne({ tempalte_id: req.params.id,isDeleted: false, })
        if (validGroup.isSuccess==true) {
            return res.status(400).json({ isSuccess: false, message: "The template ID has already been associated with a group and, therefore, cannot be deleted" })
        }
        var result = await templateService.delete(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.patch("/:id", async (req, res) => {
    try {
        var result = await templateService.patch(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

router.post('/bulkUpdate', async (req, res) => {
    try {
        var result = await templateService.BulkUpdate(req.body);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
})

module.exports = router;
