const { Router } = require('express');
const { validateComment } = require('../models/mongoose');
const CommentService = require('../services/TopicService');
const validate = require("../middlewares/validate")
const protect = require('../middlewares/protect');

const router = Router();

//router.use(protect);

router.get("", async (req, res) => {
    const comments = await CommentService.readAll();
    return res.status(200).json(comments);
});

router.get("/:id", async (req, res) => {
    const comment = await CommentService.read(req.params.id);
    return res.status(200).json(comment);
});

router.post("", validate(validateComment), async (req, res) => {
    const body  = req.body;
    const comment = await CommentService.create(body);
    return res.status(201).json(comment)
});

router.put("/:id", validate(validateComment), async (req, res) => {
    const body  = req.body;
    const { id } = req.params
    const comment = await CommentService.update(id, body);
    return res.status(200).json(comment)
});

router.patch("/:id", validate(validateComment), async (req, res) => {
    const body  = req.body;
    const { id } = req.params
    const comment = await CommentService.update(id, body);
    return res.status(200).json(comment)
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deleted = await CommentService.remove(id);
    return res.status(200).json(deleted)
});



module.exports = router;