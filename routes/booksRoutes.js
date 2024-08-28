import express from 'express';
import * as booksController from '../controllers/booksController.js';

const Router = express.Router();
export default Router;

Router
    .route('/:id?')
    .get(booksController.getAllBooks)
    .delete(booksController.deleteBook)
    .post(booksController.addBook)