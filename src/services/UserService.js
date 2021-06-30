const { User } = require('../models/mongoose');
const { encryptPassword } = require('../helpers/password');


const create = (fields) => {
    return new User(fields).save();
};

const readAll = async () => {
    return await User.find().exec();
}

const update = async (id, fields) => {
    console.log(id);
    console.log(fields);
    if(fields.password)fields.password = await encryptPassword(fields.password);

    const document = await User.findByIdAndUpdate({_id: id},fields,{new: true}).exec();
    return document; 
}

const exists = (id) => {
    return User.exists({ _id: id });
};

const findByEmail = (email) => {
    return User.findOne({ email });
};

const findById = (id) => {
    return User.findById(id);
};

module.exports = {
    create,
    readAll,
    update,
    exists,
    findByEmail,
    findById,
}