import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  constructor(
    private userService: UserService,
  ) {}

  public async getUserById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const response = await this.userService.getUserById(id);

      if (!response) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json(response);
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  public async createUser(req: Request, res: Response): Promise<Response> {
    const body = req.body;

    try {
      const response = await this.userService.createUser(body);

      if (response.status === 'error') {
        return res.status(response.code).json({ message: response.message });
      }

      return res.status(response.code).json({ message: response.message });
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  public async loginUser(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    try {
      const response = await this.userService.loginUser(email, password);
      return res.status(response.code).json({ message: response.message });
    } catch (error) {
      console.error('Error logging in:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
