import { IuserData } from "../interfaces/User/User"
import IStatusMap from "../interfaces/StatusMap/StatusMap"
import UserModel from "../models/UserModel"
// import { IVolunteerUserModel } from '../interfaces/DonateUser/VolunteerUser';

export default class UserService {
  constructor(private UserModel: UserModel) {}

  async getUserById(id: string): Promise<IuserData | null> {
    const response = await this.UserModel.getUserById(id)

    return response
  }

  async createUser(volunteerData: IuserData): Promise<IStatusMap> {
    const response = await this.UserModel.createUser(volunteerData)

    return response
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

    const response = await this.UserModel.updateUser(user?.id, userData)

    return response
  }

  async deleteUser(id: string): Promise<IStatusMap> {
    const response = await this.UserModel.deleteUser(id)

    return response
  }
  public async loginUser(email: string, password: string): Promise<IStatusMap> {
    try {
      // Check if user exists
      const user = await this.UserModel.getUserByEmail(email)

      if (!user) {
        return {
          status: "error",
          message: "User not found",
          code: 404,
        }
      }

      return {
        status: "success",
        message: "Login successful",
        code: 200,
      }
    } catch (error) {
      console.error("Error logging in:", error)
      return {
        status: "error",
        message: "Internal Server Error",
        code: 500,
      }
    }
  }
}
