import mongoose, { Schema, model, models } from 'mongoose';

const usersSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        code: { 
            type: String,
            required: true,
        }
    },
);

const Users = models.Users || model('Users', usersSchema);

export default Users;
