import users from '../models/Users.js';

export const getAllUsers = (req, res) => {
    const allUsers = users.getAllUsers()
    res.send(allUsers)
}