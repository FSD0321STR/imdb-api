const UserService = require('../services/UserService');
const { Router } = require('express');
const protect = require('../middlewares/protect');

const router = Router();
//router.use(protect);

router.get("", async (req, res) => {
    const users = await UserService.readAll();
    return res.status(200).json(users);
});

router.get("/:id", async (req, res) => {
    const user = await UserService.findById(req.params.id);
    return res.status(200).json(user);
});

router.post("", async (req, res) => {
    const body = req.body;
    const user = await UserService.create(body);
    return res.status(201).json(user)
});

router.put("/:id", async (req, res) => {
    const body = req.body;
    const { id } = req.params
    const user = await UserService.update(id, body);
    console.log(user);
    return res.status(200).json(user)
});

router.patch("/:id", async (req, res) => {
    const body = req.body;
    const { id } = req.params
    const user = await UserService.update(id, body);
    return res.status(200).json(user)
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deleted = await UserService.remove(id);
    return res.status(200).json(deleted)
});

module.exports = router;
