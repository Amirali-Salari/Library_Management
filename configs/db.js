import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

async function connectToDataBase() {
    try {
        await mongoose.connect(process.env.DataBase_URL)
        console.log('The connection with the database was established.');
    } catch (err) {
        console.log(`Database connection error: ${err}`);
    }
}

connectToDataBase()