import users from '../models/Users.js';

export const getAllUsers = async (req, res) => {
    const allUsers = await users.find({});
    res.send(allUsers)
}

export const addUser = async (req, res) => {
    try {
        const userData = new users(req.body);
        await userData.save();
        res.status(201).json({ message: 'User added successfully!' });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'Duplicate key error: Email or Username already exists.' });
        }
    }

}