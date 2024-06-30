import { IuserData } from "../interfaces/User/User"
import IStatusMap from "../interfaces/StatusMap/StatusMap"
import UserModel from "../models/UserModel"
// import { IVolunteerUserModel } from '../interfaces/DonateUser/VolunteerUser';
import  bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";
import {sendVerificationEmail} from "../helper/mailSender";

export default class UserService {
  constructor(private UserModel: UserModel) {}

  async getUserById(id: string): Promise<IuserData | null> {
    const response = await this.UserModel.getUserById(id)

    return response
  }

  async createUser(volunteerData: IuserData): Promise<IStatusMap> {
    const response = await this.UserModel.createUser(volunteerData)
    console.log("service",response);
    return response;
  }


  async sendOtp(email:string): Promise<IStatusMap> {
    try{
    const user = await this.UserModel.getUserByEmail(email);
    if (user) {
      return {
        status: "error",
        message: "User is already registered",
        code: 404,
      };
    }
      var otp = otpGenerator.generate(6, {
			upperCaseAlphabets: false,
			lowerCaseAlphabets: false,
			specialChars: false,
		  });
		var result = await this.UserModel.getUserByOtp(otp);
		console.log("Result is Generate OTP Func");
		console.log("OTP", otp);
		console.log("Result", result);
		while (result) {
			otp = otpGenerator.generate(6, {
				upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
		  });
     result=await this.UserModel.getUserByOtp(otp);
		}
     const data={
        otp:otp,
        email:email
     }
     await sendVerificationEmail(email,otp);
     const Otp =  await prisma?.otp.create({data:data});
     console.log("otp saved",Otp);
      return {
        status: "success",
        message: "Otp send successfully",
        code: 200,
        otp
      };
  }
   catch(error){
    console.error("Error logging in:", error);
      return {
        status: "error",
        message: "Internal Server Error",
        code: 500,
      };
   }
  }

  async updateUser(id: string, userData: IuserData): Promise<IStatusMap> {
    const user = await this.UserModel.getUserById(id)

    if (!user) {
      return {
        status: "error",
        message: "user not found",
        code: 404,
      }
    }

    const response = await this.UserModel.updateUser(user?.id!, userData)

    return response
  }
 
  
  async deleteUser(id: string): Promise<IStatusMap> {
    const response = await this.UserModel.deleteUser(id)

    return response
  }


   async loginUser(email: string, password: string): Promise<IStatusMap> {
    try {
      // Check if user exists
      const user = await this.UserModel.getUserByEmail(email);
      if (!user) {
        return {
          status: "error",
          message: "User not found",
          code: 404,
        };
      }

      // Check if password matches
      console.log(user);
      if (await bcrypt.compare(password, user.password)) {
        // Generate JWT token
        const token = jwt.sign(
          { email: user.email },
          process.env.JWT_SECRET || "default_secret_key",
          {expiresIn: "24h"}
        );

        // Remove password from user object before returning it
        user.password = "";
        user.token = token;
        return {
          status: "success",
          message: "User Login Success",
          code: 200,
          token,
          user,
        };
      }
       else {
        return {
          status: "error",
          message: "Password is incorrect",
          code: 401,
        };
      }
    } 
    catch (error) {
      console.error("Error logging in:", error);
      return {
        status: "error",
        message: "Internal Server Error",
        code: 500,
      };
    }
  }
}