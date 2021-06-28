const UserSevice = require('./UserService');
const { comparePasswords } = require('../helpers/password');

const register = async ({ email, password, fname, lname }) => {
    let user = await UserSevice.findByEmail(email);
    if (user) {
        return false;
    }
    user = await UserSevice.create({ email, password, fname, lname });
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