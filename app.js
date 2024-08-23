import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
import './configs/db.js'
import usersRouter from './routes/usersRoutes.js'
import booksRouter from './routes/booksRoutes.js'

const app = express()
const PORT = process.env.PORT || 80;

app.use(express.json())

app.use('/api/users/', usersRouter)
app.use('/api/books', booksRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})