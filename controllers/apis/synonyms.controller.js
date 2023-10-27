const express = require("express");
const router = express.Router();
const synonymsService = require('../../services/synonyms/synonyms.service');
const responsHelper = require('../../lib/responseHelper');

router.get("/", async (req, res) => {
    try {
        var result = await synonymsService.getAll(req);
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
        var userId = req.query.userId;        
        var result = await synonymsService.get(id, userId);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// GET BY ID
router.get("/category/:categoryId", async (req, res) => {
    try {
        let categoryId = req.params.categoryId;        
        var userId = req.query.userId;
        var result = await synonymsService.getSynonyms(categoryId,  userId);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});


// CREATE USER
router.post("/", async (req, res) => {
    try {
        var result = await synonymsService.create(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// UPDATE USER
router.put("/:id", async (req, res) => {
    try {
        var result = await synonymsService.update(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
    try {
        var result = await synonymsService.delete(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        var result = await synonymsService.patch(req);
        return responsHelper.SendResponse(res, result);
    } catch (err) {
        return responsHelper.SendErrorResponse(err, res);
    }
});

module.exports = router;
