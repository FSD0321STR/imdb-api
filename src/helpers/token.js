const dotenv = require('dotenv');
dotenv.config();

<<<<<<< HEAD
const jwt  = require('jsonwebtoken');
=======
const jwt = require('jsonwebtoken');
>>>>>>> 3dee351cec862e87e17fa91de73739ca070b2cc8
const util = require('util');

const jwtCreate = util.promisify(jwt.sign);
const jwtVerify = util.promisify(jwt.verify);

const createToken = (obj) => {
    return jwtCreate(obj, process.env.JWT_SECRET);
};

const verifyToken = (token) => {
    return jwtVerify(token, process.env.JWT_SECRET);
};

module.exports = {
    createToken,
    verifyToken,
}