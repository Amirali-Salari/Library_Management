import express from 'express';
import * as booksController from '../controllers/booksController.js';

const Router = express.Router();
export default Router;

Router.get('/', booksController.getAllBooks);