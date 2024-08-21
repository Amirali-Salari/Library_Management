import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const usersSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    crime: { type: Number, required: true },
    role: { type: String, required: true },
    password: { type: String, required: true }
});

const users = model('users', usersSchema);
export default users;