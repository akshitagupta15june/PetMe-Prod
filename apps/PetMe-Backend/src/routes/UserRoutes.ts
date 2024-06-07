import { Router } from "express";

const UserRoutes = Router();
import UserController from '../controllers/UserControllers';
 import UserModel from '../models/UserModel';
import UserService from '../services/UserService';

const userModel = new UserModel();
const userService = new UserService(userModel);
const userController = new UserController(userService);


UserRoutes.post('/signup', (req, res) => {
    userController.createUser(req,res);
    

})

UserRoutes.post('/signin', (req, res) => {


})

UserRoutes.put('/profile/:userId', (req, res) => {
    
})

UserRoutes.get('/profile/:userId', (req, res) => {
    
})

export default UserRoutes;