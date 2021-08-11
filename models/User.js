const { Schema, model } = require('mongoose');
const matchEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

const UserSchema = new Schema({
    username: {
        type: String, 
        unique: true,
        required: true, 
        trim: true
    }, 
    email:{
        type: String, 
        required: true, 
        unique: true, 
        match: [matchEmail, 'Please enter a valid email.']
    }
})

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the Pizza model
module.exports = User;