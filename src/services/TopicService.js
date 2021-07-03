const { Topic, Category, User } = require('../models/mongoose');

const create = async (document) => {
    const topic = await new Topic(document).save();
    return topic;
};

const read = async (id) => {
    return await topic.findById(id).exec();
}

const readAll = async () => {
    return await Topic.find().populate({ path: 'category', select: 'title' }).exec();
}

const readByCategory = async (category) => {
    return await Topic.find().populate({ path: 'category',match: { title: category },
    select: 'title' }).exec();
}


const update = async (id, fields) => {
    const document = await Topic.findById(id).exec();
    const newDocument = {
        ...document.toObject(),
        ...fields,
    };
    document.set(newDocument);
    await document.save();
    return document; 
}

const remove = async (id) => {
    const response = await Topic.findByIdAndDelete(id).exec();
    return response !== null;
}


module.exports = {
    create,
    read,
    readAll,
    update,
    remove,
    readByCategory
}
