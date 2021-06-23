const UserSevice = require('./UserService');
const { comparePasswords } = require('../helpers/password');

const register = async ({ email, password }) => {
    let user = await UserSevice.findByEmail(email);
    if (user) {
        return false;
    }
<<<<<<< HEAD
    user = await UserSevice.create({email, password});
=======
    user = await UserSevice.create({ email, password });
>>>>>>> 3dee351cec862e87e17fa91de73739ca070b2cc8
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