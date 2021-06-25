const { Router } = require('express');
const { validateCategory } = require('../models/mongoose');
const CategoryService = require('../services/CategoryService');
const validate = require("../middlewares/validate")
const protect = require('../middlewares/protect');

const router = Router();

//router.use(protect);

router.get("", async (req, res) => {
    const categories  = await CategoryService.readAll();
    return res.status(200).json(categories);
});

router.get("/:id", async (req, res) => {
    const category = await CategoryService.read(req.params.id);
    return res.status(200).json(category);
});

router.post("", validate(validateCategory), async (req, res) => {
    const body  = req.body;
    const category = await CategoryService.create(body);
    return res.status(201).json(category)
});

router.put("/:id", validate(validateCategory), async (req, res) => {
    const body  = req.body;
    const { id } = req.params
    const category = await CategoryService.update(id, body);
    return res.status(200).json(category)
});

router.patch("/:id", validate(validateCategory), async (req, res) => {
    const body  = req.body;
    const { id } = req.params
    const category = await CategoryService.update(id, body);
    return res.status(200).json(category)
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deleted = await CategoryService.remove(id);
    return res.status(200).json(deleted)
});


module.exports = router;