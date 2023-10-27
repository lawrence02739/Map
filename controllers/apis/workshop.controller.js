const express = require("express");
const router = express.Router();
const workshopService = require("../../services/workshop/workshop.service");
const responsHelper = require('../../lib/responseHelper');

// GET USER LIST
router.get("/", async (req, res) => {
  try {

    var result = await workshopService.getAll(req);
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
    var result = await workshopService.get(id);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err, res);
  }
});


// CREATE USER
router.post("/", async (req, res) => {
  try {
    var result = await workshopService.create(req);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err, res);
  }
});

// UPDATE USER
router.put("/:id", async (req, res) => {
  try {
    // DO VALIDATION NEEDED
    var result = await workshopService.update(req);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err, res);
  }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  try {
    // DO VALIDATION NEEDED
    var result = await workshopService.delete(req);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err, res);
  }
});

router.patch("/:id", async (req, res) => {
  try {
      var result = await workshopService.patch(req);
      return responsHelper.SendResponse(res, result);
  } catch (err) {
      return responsHelper.SendErrorResponse(err, res);
  }
});


module.exports = router;
