const express = require("express");
const router = express.Router();
const questionAnswerService = require("../../services/questionAnswer/questionAnswer.service");
const questionService = require("../../services/question/question.service");
const participantService = require("../../services/participe/participant.service");
const memberService = require("../../services/member/member");
const responsHelper = require('../../lib/responseHelper');
const groupService = require("../../services/group/group");


const { check, validationResult } = require("express-validator");




// GET BY ID
router.get("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        // DO VALIDATION NEEDED
        var result = await participantService.get(id);
        if (result.isSuccess == true) {
            var workShopResult = await groupService.get(result.data.group_id);
            var template = await questionService.find({ template_id: workShopResult.data.tempalte_id.id })

            
            result.data = template;
            return responsHelper.SendResponse(res, result);
        } else {
            return responsHelper.SendErrorResponse("Invalid data in result", res);
        }


    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
})

module.exports = router;