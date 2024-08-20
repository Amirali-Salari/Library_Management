import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
import './configs/db.js'

const app = express()
const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})