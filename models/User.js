const { Schema, model } = require('mongoose');
const matchEmail = `/.+\@.+\..+/`;

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

// export the User model
module.exports = User;