import express from 'express';
import * as usersController from '../controllers/usersController.js'

const Router = express.Router();

Router.get('/', usersController.getAllUsers())