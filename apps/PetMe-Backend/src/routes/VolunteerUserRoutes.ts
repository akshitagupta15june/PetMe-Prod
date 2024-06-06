import { Router } from 'express';
import VolunteerUserController from '../controllers/VolunteerUserController';
import VolunteerUserModel from '../models/VolunteersModel';
import VolunteerUserService from '../services/VolunteersService';

const volunteerUserModel = new VolunteerUserModel();
const volunteerUserService = new VolunteerUserService(volunteerUserModel);
const volunteerUserController = new VolunteerUserController(volunteerUserService);

const router = Router();

router.get('/', (req, res) => {
  volunteerUserController.getVolunteerUserById(req, res);
});

router.post('/', (req, res) => {
  volunteerUserController.createVolunteerUser(req, res);
});

export default router;
