// Jash - Category 
// Mounir - Comments
// Giorgos - Topics



require('dotenv').config();
const Ajv = require('ajv');
const ajv = new Ajv();
const mongoose = require('mongoose');
const { encryptPassword } = require('../helpers/password');

mongoose.connect(`mongodb+srv://dbIMDB:IMdb2121@project-imdb-cluster.fipev.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });

// SCHEMA USER
const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
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




module.exports = {

    User,

}

