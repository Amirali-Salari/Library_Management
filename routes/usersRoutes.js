import express from 'express';
import * as usersController from '../controllers/usersController.js';
import validateData from '../middlewares/usersMiddleware.js';

const Router = express.Router();
export default Router;

Router.post('/login', usersController.login);

Router
    .route('/:username?')
    .get(usersController.getAllUsers)
    .post(validateData, usersController.addUser)
    .put(usersController.setFine)

Router.put('/upgrade/:username', usersController.upgradeUser);