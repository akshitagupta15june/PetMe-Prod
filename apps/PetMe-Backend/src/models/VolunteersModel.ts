import prisma from '../db';
import IStatusMap from '../interfaces/StatusMap/StatusMap';
import { IVolunteerData, IVolunteerUserModel, } from '../interfaces/DonateUser/VolunteerUser';

// export default class VolunteerUserModel {
//   private prisma = prisma;

//   async getVolunteerUserById(id: number): Promise<IVolunteerUserModel | null> {
//     const donateUser = await this.prisma.volunteer_User.findUnique({
//       where: {
//         id,
//       },
//     });

//     if (!donateUser) return null;

//     return donateUser;
//   }

//   async getVolunteerUserByEmail(email: string): Promise<IVolunteerUserModel | null> {
//     const donateUser = await this.prisma.volunteer_User.findUnique({
//       where: {
//         email,
//       },
//     });

//     if (!donateUser) return null;

//     return donateUser;
//   }

//   async createVolunteerUser(volunteerUser: IVolunteerData): Promise<IStatusMap> {

//     const isEmailAlreadyRegistered = await this.prisma.volunteer_User.findUnique({
//       where: {
//         email: volunteerUser.email,
//       },
//     });

//     if (isEmailAlreadyRegistered) {
//       return {
//         status: 'error',
//         message: 'Email already registered',
//         code: 400,
//       };
//     }

//     await this.prisma.volunteer_User.create({
//       data: {
//         first_name: volunteerUser.firstName,
//         last_name: volunteerUser.lastName,
//         email: volunteerUser.email,
//         address: volunteerUser.address,
//         city: volunteerUser.city,
//         state: volunteerUser.state,
//         country: volunteerUser.country,
//         zip_code: volunteerUser.zipCode,
//         phone_number: volunteerUser.phoneNumber,
//       },
//     });

//     return {
//       status: 'success',
//       message: 'Volunteer User created successfully',
//       code: 201,
//     };
//   }

//   async updateVolunteerUser(userId: number, volunteerUser: IVolunteerData): Promise<IStatusMap> {//here "Promise<IStatusMap>" is used for returning the status of the operation
//     await this.prisma.volunteer_User.update({
//       where: {
//         id: userId,
//       },
//       data: {
//         first_name: volunteerUser.firstName,
//         last_name: volunteerUser.lastName,
//         email: volunteerUser.email,
//         address: volunteerUser.address,
//         city: volunteerUser.city,
//         state: volunteerUser.state,
//         country: volunteerUser.country,
//         zip_code: volunteerUser.zipCode,
//         phone_number: volunteerUser.phoneNumber,
//       },
//     });

//     return {
//       status: 'success',
//       message: 'Volunteer User updated successfully',
//       code: 200,
//     };
//   }

//   async deleteVolunteerUser(id: number): Promise<IStatusMap> {
//     await this.prisma.volunteer_User.delete({
//       where: {
//         id,
//       },
//     });

//     return {
//       status: 'success',
//       message: 'volunteerUser deleted successfully',
//       code: 200,
//     };
//   }
// }
