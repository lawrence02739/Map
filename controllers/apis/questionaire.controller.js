const express = require("express");
const router = express.Router();
const questionaireService = require("../../services/questionaire/questionaire.service");
const responsHelper = require('../../lib/responseHelper');

// GET Questionaire LIST
router.get("/", async (req, res) => {
  try {

    var result = await questionaireService.getAll(req);
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
    var result = await questionaireService.get(id);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});


// CREATE Questionaire
router.post("/", async (req, res) => {
  try {      
    var result = await questionaireService.create(req);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});

// UPDATE USER
router.put("/:id", async (req, res) => {
  try { 

    // DO VALIDATION NEEDED
    var result = await questionaireService.update(req);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  try {
    var result = await questionaireService.delete(req);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});

router.patch("/:id", async (req, res) => {
  try {
      var result = await questionaireService.patch(req);
      return responsHelper.SendResponse(res, result);
  } catch (err) {
      return responsHelper.SendErrorResponse(err, res);
  }
});

// GET Questionaire LIST
router.get("/dashboard/sum", async (req, res) => {
  try {
    var result = await questionaireService.getDashboard(req);
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
module.exports = router;
