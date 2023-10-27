const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const questionAnswerService = require("../../services/questionAnswer/questionAnswer.service");
const participantService = require("../../services/participe/participant.service");
const questionService = require("../../services/question/question.service");
const memberService = require("../../services/member/member");
const responsHelper = require('../../lib/responseHelper');
const { check, validationResult } = require("express-validator");

// GET USER LIST
router.get("/", async (req, res) => {
    try {
        var result = await questionAnswerService.getAll(req);
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
        var result = await questionAnswerService.get(id);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


// CREATE USER
router.post("/", [
    // Validate required fields
    //     check('*.member_id').notEmpty().withMessage('Member ID is required'),
    //   check('*.question_id').notEmpty().withMessage('Question ID is required'),
    //   check('*.questionAnswer').notEmpty().withMessage('Question Answer is required'),
], async (req, res) => {

    try {
        const errors = validationResult(req);


        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors
            });
        }
       // validating Member
        if (req.body[0].member_id) {
            let checkMember = await memberService.get(req.body[0].member_id)
            if(checkMember.isSuccess == false){
                return res.status(404).json({isSuccess: false, message: "Invalid Member" })
            }
            else if(checkMember.data.responsed == true){
                return res.status(404).json({isSuccess: false, message: "Member has already submitted the survey." })
            }
            var id=req.body[0].member_id
            var data={
                params:{id:id},
                body:{responsed : true}
            }
            let Member = await memberService.update(data)
        }

         // validating Participant
         if (req.body[0].participant_id) {
            let checkParticipant = await participantService.get(req.body[0].participant_id)
            if(checkParticipant.isSuccess == false){
                return res.status(404).json({isSuccess: false, message: "Invalid Participant" })
            }
            else if(checkParticipant.data.responsed == true){
                return res.status(404).json({isSuccess: false, message: "Participant has already submitted the survey." })
            }
            var id=req.body[0].participant_id
            var data={
                params:{id:id},
                body:{responsed : true}
            }
            let Participant = await participantService.update(data)

        }
        //    let checktem = await questionService.get(req.body.question_id[0])
        //    if(checktem.isSuccess == false){
        //     return res.status(404).json({isSuccess: false, message: "Invalid Question Id" })
        //    }
        

        var result = await questionAnswerService.bulkCreate(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// UPDATE USER
router.put("/", async (req, res) => {
    try {
        var result = await questionAnswerService.bulkUpdate(req.body);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
    try {
        var result = await questionAnswerService.delete(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.patch("/:id", async (req, res) => {
    try {
        var result = await questionAnswerService.patch(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


router.get("/member/:id", async (req, res) => {
    try {

        let id = req.params.id;
        let checkParticipant = await memberService.get(id)
        if (checkParticipant.isSuccess == false) {
            return res.status(404).json({ isSuccess: false, message: "Invalid Member" })
        } else if (checkParticipant.data.responsed == false) {
            return res.status(404).json({ isSuccess: false, message: "Member does not submitted the survey." })
        }
        var data = await questionAnswerService.getByField({ member_id: mongoose.Types.ObjectId(id), isDeleted: false });
        data["Name"] = checkParticipant.data.firstName + " " + checkParticipant.data.lastName

        return res.status(200).json(data);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

router.get("/participe/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let checkParticipant = await participantService.get(id)
        
        if (checkParticipant.isSuccess == false) {
            return res.status(404).json({ isSuccess: false, message: "Invalid Participant" })
        } else if (checkParticipant.data.responsed == false) {
            return res.status(404).json({ isSuccess: false, message: "Participant does not submitted the survey." })
        }
       
        var data = await questionAnswerService.getByField({ participant_id: mongoose.Types.ObjectId(id), isDeleted: false });
        data["Name"] = checkParticipant.data.participantFirstName + " " + checkParticipant.data.participantLastName

        return res.status(200).json(data);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

router.get("/allParticipe/:id", async (req, res) => {
    try {
        let id = req.params.id;

        let checkParticipant = await participantService.get(id)
        if (checkParticipant.isSuccess == false) {
            return res.status(404).json({ isSuccess: false, message: "Invalid Participant" })
        } else if (checkParticipant.data.responsed == false) {
            return res.status(404).json({ isSuccess: false, message: "Participant does not submitted the survey." })
        }
        let Participant = await participantService.find({ _id: mongoose.Types.ObjectId(id), isDeleted: false })
       

        var result1 = await questionAnswerService.getByField({ participant_id: mongoose.Types.ObjectId(id), isDeleted: false });
        var result2= await Promise.all(Participant.data[0].Members.map(async obj=>await questionAnswerService.getByField({ member_id:mongoose.Types.ObjectId(obj._id),isDeleted: false  })))

           var verify= result2.filter(obj=> obj.isSuccess==false)
            if(!verify[0]){
                const data={
                    params:{id:req.params.id},
                    body:{
                        aggregatePdf:true
                    }
                }
                await participantService.update(data);
            }

        var result = {
            participant: result1,
            members: result2,
            name:Participant.data[0].participantFirstName+' '+Participant.data[0].participantLastName
        }
        return res.status(200).json(result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


module.exports = router;
