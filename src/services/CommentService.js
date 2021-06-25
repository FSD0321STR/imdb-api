const { Topic, Comment, User } = require('../models/mongoose');

const create = async (document) => {
    const comment = await new Comment(document).save();
    return topic;
};

const read = async (id) => {
    return await Comment.findById(id).exec();
}

const readAll = async () => {
    return await Comment.find().exec();
}

const update = async (id, fields) => {
    const document = await Comment.findById(id).exec();
    const newDocument = {
        ...document.toObject(),
        ...fields,
    };
    document.set(newDocument);
    await document.save();
    return document; 
}

const remove = async (id) => {
    const response = await Comment.findByIdAndDelete(id).exec();
    return response !== null;
}


module.exports = {
    create,
    read,
    readAll,
    update,
    remove,
}
