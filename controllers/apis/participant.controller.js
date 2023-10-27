const express = require("express");
const router = express.Router();
const participantService = require("../../services/participant/participant.service");
const responsHelper = require('../../lib/responseHelper');

// GET USER LIST
router.get("/", async (req, res) => {
  try {

    var result = await participantService.getAll(req);
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
    var result = await participantService.get(id);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});


// CREATE USER
router.post("/", async (req, res) => {
  try {    
    var result = await participantService.create(req);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});

// UPDATE USER
router.put("/:id", async (req, res) => {
  try { 

    // DO VALIDATION NEEDED
    var result = await participantService.update(req);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  try {
    var result = await participantService.delete(req);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});

router.patch("/:id", async (req, res) => {
  try {
      var result = await participantService.patch(req);
      return responsHelper.SendResponse(res, result);
  } catch (err) {
      return responsHelper.SendErrorResponse(err, res);
  }
});

router.get("/:participant/workshop/:workshop", async (req, res) => {
  try {
    var workshopId = req.params.workshop;
    var participantId = req.params.participant;
      var result = await participantService.getParticipantByWorkshop(workshopId, participantId);
      return responsHelper.SendResponse(res, result);
  } catch (err) {
      return responsHelper.SendErrorResponse(err, res);
  }
});


module.exports = router;
