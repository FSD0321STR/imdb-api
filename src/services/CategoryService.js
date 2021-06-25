const { Category } = require('../models/mongoose');



const create = async (document) => {
    return await new Category(document).save();
};

const read = async (id) => {
    return await Category.findById(id).exec();
}

const readAll = async () => {
    return await Category.find().exec();
}

const update = async (id, fields) => {
    const document = await Board.findById(id).exec();
    const newDocument = {
        ...document.toObject(),
        ...fields,
    };
    document.set(newDocument);
    await document.save();
    return document; 
}

const remove = async (id) => {
    const response = await Board.findByIdAndDelete(id).exec();
    return response !== null;
}


module.exports = {
    create,
    read,
    readAll,
    update,
    remove,
}