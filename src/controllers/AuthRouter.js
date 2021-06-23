<<<<<<< HEAD
const AuthService = require('../services/AuthService');
const { Router } = require('express');
const { createToken } = require('../helpers/token');

const router = Router();

router.post('/register', async (req, res) => {
    const user = await AuthService.register(req.body);
    if (!user) {
        return res.status(403).json({ message: "The email is already in use" });
    }
    const token = await createToken({ id: user._id }); // generar token;
    return res.status(201).json({ token });
});

router.post('/login', async (req, res) => {
    const user = await AuthService.login(req.body);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = await createToken({ id: user._id }); // generar token;
    return res.status(200).json({ token });
});

module.exports = router;
=======
const UserSevice = require('./UserService');
const { comparePasswords } = require('../helpers/password');

const register = async ({ email, password }) => {
    let user = await UserSevice.findByEmail(email);
    if (user) {
        return false;
    }
    user = await UserSevice.create({email, password});
    return user;
}

const login = async ({ email, password }) => {
    const user = await UserSevice.findByEmail(email);
    const equalPasswords = await comparePasswords({
        plain: password,
        hash: user.password,
    });
    if (equalPasswords) {
        return user;
    }
    return false;
}

module.exports = {
    register,
    login,
}
>>>>>>> 19a20c922a1040f9fae2fb926a135196802f9a5a
