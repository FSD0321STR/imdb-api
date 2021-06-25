const { Router } = require('express');
const { validateTopic } = require('../models/mongoose');
const TopicService = require('../services/TopicService');
const validate = require("../middlewares/validate")
const protect = require('../middlewares/protect');

const router = Router();

//router.use(protect);

router.get("", async (req, res) => {
    const topics = await TopicService.readAll();
    return res.status(200).json(topics);
});

router.get("/:id", async (req, res) => {
    const topic = await TopicService.read(req.params.id);
    return res.status(200).json(topic);
});

router.post("", validate(validateTopic), async (req, res) => {
    const body  = req.body;
    const topic = await TopicService.create(body);
    return res.status(201).json(topic)
});

router.put("/:id", validate(validateTopic), async (req, res) => {
    const body  = req.body;
    const { id } = req.params
    const topic = await TopicService.update(id, body);
    return res.status(200).json(topic)
});

router.patch("/:id", validate(validateTopic), async (req, res) => {
    const body  = req.body;
    const { id } = req.params
    const topic = await TopicService.update(id, body);
    return res.status(200).json(topic)
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deleted = await TopicService.remove(id);
    return res.status(200).json(deleted)
});



module.exports = router;