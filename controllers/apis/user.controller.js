const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const responsHelper = require('../../lib/responseHelper');
const UserService = require('../../services/user/user.service');


// GET USER LIST
router.get("/", async (req, res) => {
  try {

    var result = await UserService.getAllUsers(req);
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
    var result = await UserService.getByUserId(id);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});


// CREATE USER
router.post("/", [check("email").exists()], async (req, res) => {
  try {
    const userData = req.body;    
    // DO VALIDATION NEEDED
    var result = await UserService.createuser(userData);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});

// UPDATE USER
router.put("/:id", [check("email").exists()], async (req, res) => {
  try {    
    const userData = req.body;
    const id = req.params.id;    

    // DO VALIDATION NEEDED
    var result = await UserService.updateUser(id, userData);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // DO VALIDATION NEEDED
    var result = await UserService.deleteUser(id);
    return responsHelper.SendResponse(res, result);
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});

router.get("/get/roles", async (req, res) => {
  try {
    
    var result = await UserService.getAllRoles(req);
    if (result.isSuccess) {
      return res.status(200).json({
        message: "Roles List.",
        data: result
      });
    }
    else
    {
      return res.status(400).json({
        message: "Failed to get roles.",
        data: result
      });
    }
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});

router.get("/get/role/:value", async (req, res) => {
  try {
    var filterValue = req.params.value;
    var result = await UserService.getRole(filterValue);    
    if (result.isSuccess) {
      return res.status(200).json({
        message: "Here is the Value!!",
        data: result.data
      });
    }
    else
    {
      return res.status(400).json({
        message: "Failed to get role!!.",
        data: result.data
      });
    }
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});

// PATCH FORM
router.patch("/:id", async (req, res) => {
  try {
     
      const userPatchData = req.body;
      const userId = req.params.id;
      // DO VALIDATION NEEDED
      
      var result = await UserService.patchUpdate(userId, userPatchData);
      if (result.isSuccess) {
          return res.status(200).json({
              message: "User Updated Successfully.",
              data: result.data
          });
      } else {
          return res.status(400).json({
              message: "Failed to update User!!",
              data: result.data
          });
      }
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});

router.post("/changepassword", async (req, res) => {
  try {
    const userData = req.body;
    // DO VALIDATION NEEDED

    var result = await UserService.changePassword(userData);
    if (result.isSuccess) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json(result);
    }
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});


router.put("/profileupdate/:id", async (req, res) => {
  try {
    const userData = req.body;
    const userId = req.params.id;
    // DO VALIDATION NEEDED

    var result = await UserService.updateProfile(userId, userData);
    if (result.isSuccess) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json(result);
    }
  } catch (err) {
    return responsHelper.SendErrorResponse(err,res);
  }
});

module.exports = router;
