import { Request, Response } from "express"
import UserService from "../services/UserService"
import { IuserData } from "../interfaces/User/User"
import { IuserDataSchema } from "../zod/sign-up"
import { z } from 'zod';
export default class UserController {
  constructor(private userService: UserService) {}

  public async getUserById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      const response = await this.userService.getUserById(id)

      if (!response) {
        return res.status(404).json({ message: "User not found" })
      }

      return res.status(200).json(response)
    } 
    catch (error) {
      console.error("Error fetching user by ID:", error)
      return res.status(500).json({ message: "Internal Server Error" })
    }
  }

  public async createUser(req: Request, res: Response): Promise<Response> {
    const body = req.body;

    try {
     const validatedData = IuserDataSchema.safeParse(body);
     if (!validatedData.success) {
      // Validation failed - return error response
      const errors = validatedData.error.issues[0].message; // Get formatted errors
      return res.status(400).json({ message: 'Validation error', errors });
     }

      const user : IuserData = validatedData.data; // Access the validated data
      const response = await this.userService.createUser(user)
      console.log("controller",response);
      if(response.status === "error"){
       return res.status(response.code).json({message: response.message })
      }

       return res.status(response.code).json({user:response.user,message: response.message});
    }
    catch (error) {
      console.error("Error creating user:", error)
      return res.status(500).json({ message: "Internal Server Error" })
    }
  }




public async loginUser(req: Request, res: Response): Promise<Response> {
  const { email, password } = req.body;

  // Define Zod schema for login data
  const loginSchema = z.object({
    email: z.string().email({ message: 'Invalid email format' }).nonempty({ message: 'Email is required' }), // Required with message
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }), // Minimum password length with message
  });

  try {
    // Validate request body
    const validatedData = loginSchema.safeParse({ email, password });
    if (!validatedData.success) {
      // Validation failed - return error response
      const errors = validatedData.error.issues[0].message; // Get formatted errors
      return res.status(400).json({ message: 'Validation error', errors });
    }

    const { email: validatedEmail, password: validatedPassword } = validatedData.data; // Access validated data

    const response = await this.userService.loginUser(validatedEmail, validatedPassword);
    console.log("token", response.token);
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    res.cookie("token", response.token, options);
    return res.status(response.code).json({ message: response.message });
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}


  public async updateUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const body = req.body

    try {
      const response = await this.userService.updateUser(id, body)

      if (response.status === "error") {
        return res.status(response.code).json({ message: response.message })
      }

      return res.status(response.code).json({ message: response.message })
    } catch (error) {
      console.error("Error updating user:", error)
      return res.status(500).json({ message: "Internal Server Error" })
    }
  }



  public async sendOtp(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;
  
    // Define Zod schema for sendOtp data
    const sendOtpSchema = z.object({
      email: z.string().email({ message: 'Invalid email format' }).nonempty({ message: 'Email is required' }), // Required with message
    });
  
    try {
      // Validate request body
      const validatedData = sendOtpSchema.safeParse({ email });
  
      if (!validatedData.success) {
        // Validation failed - return error response
        const errors = validatedData.error.issues[0].message; // Get formatted errors
        return res.status(400).json({ message: 'Validation error', errors });
      }
  
      const { email: validatedEmail } = validatedData.data; // Access validated data
  
      const response = await this.userService.sendOtp(validatedEmail);
      console.log("response otp", response);
      return res.status(response.code).json({ otp: response.otp, user: response.user, message: response.message });
    } catch (error) {
      console.error("Error in sending otp:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  

}