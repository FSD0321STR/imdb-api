const { User } = require('../models/mongoose');

const create = (fields) => {
    return new User(fields).save();
};

const exists = (id) => {
<<<<<<< HEAD
    return User.exists({_id: id });
}; 
=======
    return User.exists({ _id: id });
};
>>>>>>> 3dee351cec862e87e17fa91de73739ca070b2cc8

const findByEmail = (email) => {
    return User.findOne({ email });
};

const findById = (id) => {
    return User.findById(id);
};

module.exports = {
    create,
    exists,
    findByEmail,
    findById,
}