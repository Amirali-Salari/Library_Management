import users from '../models/Users.js';
import bcrypt from 'bcrypt';

export const getAllUsers = async (req, res) => {
    const allUsers = await users.find({});
    res.send(allUsers)
}

export const addUser = async (req, res) => {
    try {
        const userData = new users(req.body);
        if (userData.password) {
            const saltRounds = 10;

            const salt = await bcrypt.genSalt(saltRounds);
            const hashedPassword = await bcrypt.hash(userData.password, salt);

            userData.password = hashedPassword;

            await userData.save();
        }
        res.status(201).json({ message: 'User added successfully!' });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'Duplicate key error: Email or Username already exists.' });
        }
    }

}

export const setCrime = async (req, res) => {
    try {
        const updatedUser = await users.findOneAndUpdate(
            { username: req.params.username },
            { crime: req.body.crime },
            { new: true }
        )

        if (updatedUser) {
            res.status(200).json({ message: 'User crime updated successfully', updatedUser });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
}

export const upgradeUser = async (req, res) => {
    try {
        const updatedUser = await users.findOneAndUpdate(
            { username: req.params.username },
            { role: 'ADMIN' },
            { new: true }
        )

        if (updatedUser) {
            res.status(200).json({ message: 'User upgraded successfully', updatedUser });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error upgrading user', error });
    }
}