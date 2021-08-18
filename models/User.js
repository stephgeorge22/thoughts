const { Schema, model, Types } = require('mongoose');
const { truncateSync } = require('node:fs');

const FriendSchema = new Schema(
    {
        friendId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        friend: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/]
        }, 
        friends: [FriendSchema]
    }, 
    {
        toJSON: {
            vituals: true,
            getters: true
        }, 
        id: false
    }
    
)

// virtual for total number of friends
TUserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;