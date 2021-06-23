const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const encryptPassword = (password) => {
    return bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))
};

const comparePasswords = ({ hash, plain }) => {
    return bcrypt.compare(plain, hash);
};

module.exports = {
    encryptPassword,
    comparePasswords,
<<<<<<< HEAD
}
=======
}
>>>>>>> 3dee351cec862e87e17fa91de73739ca070b2cc8
