import { Request, Response } from 'express';
import VolunteerUserService from '../services/VolunteersService';

export default class VolunteerUserController {
  constructor(
    private volunterUserService: VolunteerUserService,
  ) { }

  public async getVolunteerUserById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await this.volunterUserService.getVolunteerUserById(Number(id));

    if (!response) return res.status(404).json({ message: 'Volunteer not found' });

    return res.status(200).json(response);
  }

  public async getVolunteerUserByEmail(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;
    const response = await this.volunterUserService.getVolunteerUserByEmail(email);

    if (!response) return res.status(404).json({ message: 'Volunteer not found' });

    return res.status(200).json(response);
  }

  public async createVolunteerUser(req: Request, res: Response): Promise<Response> {
    const body = req.body;

    const response = await this.volunterUserService.createVolunteerUser(body);

    return res.status(response.code).json({ message: response });
  }
}
