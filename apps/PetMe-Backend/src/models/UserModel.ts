import prisma from "../db"
import IStatusMap from "../interfaces/StatusMap/StatusMap"
import { IuserData, IuserInput } from "../interfaces/User/User"
import  bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export default class UserModel {
  private prisma = prisma

  async getUserById(id: string): Promise<IuserData | null> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id },
      })

      if (!user) return null

      return {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: "",
        address: user.address,
        city: user.city,
        state: user.state,
        country: user.country,
        zip_code: user.zip_code,
        phone_number: user.phone_number,
        role: user.role,
      }
    } 
    catch (error) {
      console.error("Error fetching user by ID:", error)
      throw new Error("Error fetching user")
    }
  }
 

 
  async createUser(user: IuserData): Promise<IStatusMap> {
    try {
      const isEmailAlreadyRegistered = await this.prisma.user.findUnique({
        where: { email: user.email },
      })

      if (isEmailAlreadyRegistered){
        return {
          status: "error",
          message: "Email already registered",
          code: 400,
        }
      } 
       
      var verify=false;
      if(user.otp){
       verify=true;
       const response = await prisma.otp.findMany({
          where: { email: user.email },
          orderBy: { createdAt: 'desc' },
          take: 1,
       });
       
      console.log("otp",response[0].otp);
      if (response.length === 0) {
        // OTP not found for the email
        verify=false;
        return{
        status: "error",
        message: "otp is not valid",
        code: 400,
        user:null
      }
      } else if (user.otp !== response[0].otp) {
        // Invalid OTP
        verify=false;
        return{
          status: "error",
          message: "otp is not valid",
          code: 400,
          user:null
        }
      }

      }
      const hashedPassword: string = await bcrypt.hash(user.password, 10);
      const newUser: IuserInput = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: hashedPassword,
        address: user.address,
        city: user.city,
        state: user.state,
        country: user.country,
        zip_code: user.zip_code,
        phone_number: user.phone_number,
        token: "",
        verfied_flag:verify
      }
      //@ts-ignore
      await this.prisma.user.create({ data: newUser })

      return {
        status: "success",
        message: "Volunteer User created successfully",
        code: 201,
        user:newUser,
      }
    } 
    catch (error) {
      console.error("Error creating user:", error)
      return {
        status: "error",
        message: "Error creating user",
        code: 500,
      }
    }
  }
  

  
  async updateUser(userId: string, user: IuserData): Promise<IStatusMap> {
    try {
      await this.prisma.user.update({
        where: { id: userId },
        data: {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          address: user.address,
          city: user.city,
          state: user.state,
          country: user.country,
          zip_code: user.zip_code,
          phone_number: user.phone_number,
        },
      })

      return {
        status: "success",
        message: "Volunteer User updated successfully",
        code: 200,
      }
    } catch (error) {
      console.error("Error updating user:", error)
      return {
        status: "error",
        message: "Error updating user",
        code: 500,
      }
    }
  }

  async deleteUser(id: string): Promise<IStatusMap> {
    try {
      await this.prisma.user.delete({
        where: { id },
      })

      return {
        status: "success",
        message: "Volunteer User deleted successfully",
        code: 200,
      }
    } catch (error) {
      console.error("Error deleting user:", error)
      return {
        status: "error",
        message: "Error deleting user",
        code: 500,
      }
    }
  }
  //make some changes here bcz it is not complete
  public async getUserByEmail(email: string): Promise<IuserData | null> {
    try {
      const user = await this.prisma.user.findUnique({ where: { email } })
      if (!user) return null
      return {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        address: user.address,
        city: user.city,
        state: user.state,
        country: user.country,
        zip_code: user.zip_code,
        phone_number: user.phone_number,
        role: user.role,
        token: user.token
      }
    } catch (error) {
      console.error("Error fetching user by email:", error)
      throw new Error("Error fetching user by email")
    }
  }

  public async getUserByOtp(otp: string): Promise<Boolean> {
    try {
      const Otp = await this.prisma.otp.findUnique({ where: { otp } });
      if (Otp) return true;  // if otp  found  return true
      return false;  // else  return false
    }
    catch(error){
      console.error("Error fetching user by email:", error)
      throw new Error("Error fetching user by email")
    }
  }

}
