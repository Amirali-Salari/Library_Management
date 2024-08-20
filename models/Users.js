import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const usersSchema = new Schema({
    name: String,
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    crime: Number,
    role: String,
});

const users = model('users', usersSchema);
export default users;