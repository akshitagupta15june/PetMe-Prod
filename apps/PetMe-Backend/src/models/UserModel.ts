import prisma from "../db"
import IStatusMap from "../interfaces/StatusMap/StatusMap"
import { IuserData, IuserInput } from "../interfaces/User/User"

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
        address: user.address,
        city: user.city,
        state: user.state,
        country: user.country,
        zip_code: user.zip_code,
        phone_number: user.phone_number,
        role: user.role,
      }
    } catch (error) {
      console.error("Error fetching user by ID:", error)
      throw new Error("Error fetching user")
    }
  }

  async createUser(user: IuserData): Promise<IStatusMap> {
    try {
      const isEmailAlreadyRegistered = await this.prisma.user.findUnique({
        where: { email: user.email },
      })

      if (isEmailAlreadyRegistered) {
        return {
          status: "error",
          message: "Email already registered",
          code: 400,
        }
      }

      const newUser: IuserInput = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        address: user.address,
        city: user.city,
        state: user.state,
        country: user.country,
        zip_code: user.zip_code,
        phone_number: user.phone_number,
      }
      //@ts-ignore
      await this.prisma.user.create({ data: newUser })

      return {
        status: "success",
        message: "Volunteer User created successfully",
        code: 201,
      }
    } catch (error) {
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
        address: user.address,
        city: user.city,
        state: user.state,
        country: user.country,
        zip_code: user.zip_code,
        phone_number: user.phone_number,
        role: user.role,
      }
    } catch (error) {
      console.error("Error fetching user by email:", error)
      throw new Error("Error fetching user by email")
    }
  }
}
