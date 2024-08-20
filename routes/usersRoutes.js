import express from 'express';
import * as usersController from '../controllers/usersController.js'

const Router = express.Router();
export default Router;

Router.get('/', usersController.getAllUsers)