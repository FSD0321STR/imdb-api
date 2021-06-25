// Jash - Category 
// Mounir - Comments
// Giorgos - Topics



require('dotenv').config();
const Ajv = require('ajv');
const ajv = new Ajv();
const mongoose = require('mongoose');
const { encryptPassword } = require('../helpers/password');

mongoose.connect(`mongodb+srv://dbIMDB:IMdb2121@project-imdb-cluster.fipev.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });


const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    boards: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Board'
        }
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await encryptPassword(user.password); // encrypt;
    }
    next();
});

const User = mongoose.model('User', userSchema);


const Category = mongoose.model('Category', {
    title: String,
    desc: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const categorySchema = {
    type: "object",
    properties: {
      title: {type: "string"},
      desc: {type: "string"},
    },
    required: ["title"],
    additionalProperties: false
};



validateCategory = (document) => {
    return ajv.validate(categorySchema, document);
}

const Topic = mongoose.model('Topic', {
    title: String,
    desc: String,
    img: String,
    category: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const topicSchema = {
    type: "object",
    properties: {
      title: {type: "string"},
      desc: {type: "string"},
    },
    required: ["title","desc"],
    additionalProperties: true
};

validateTopic = (document) => {
    return ajv.validate(topicSchema, document);
}

const Comment = mongoose.model('Comment', {
    title: String,
    desc: String,
    topic:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const commentSchema = {
    type: "object",
    properties: {
      title: {type: "string"},
      desc: {type: "string"},
      topic: {type: "string"},
      user: {type: "string"}
    },
    required: ["title","desc","user","topic"],
    additionalProperties: false
};

validateComment = (document) => {
    return ajv.validate(commentSchema, document);
}


module.exports = {
    Category,
    validateCategory,
    Topic,
    validateTopic,
    User,
    Comment,
    validateComment,
}

