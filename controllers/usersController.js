import users from '../models/Users.js';

export const getAllUsers = async (req, res) => {
    const allUsers = await users.find({});
    res.send(allUsers)
}