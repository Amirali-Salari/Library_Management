import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const usersSchema = new Schema({
    name: String,
    username: String,
    email: String,
    crime: Number,
    role: String,
});

const users = model('users', usersSchema);
export default users;

export const getAllUsers = () => {
    const allUsers = users.find({});
    return allUsers;
}