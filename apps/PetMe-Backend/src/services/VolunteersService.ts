// import { IVolunteerData } from '../interfaces/DonateUser/VolunteerUser';
// import IStatusMap from '../interfaces/StatusMap/StatusMap';
// import VolunteerUserModel from '../models/VolunteersModel';
// import { IVolunteerUserModel } from '../interfaces/DonateUser/VolunteerUser';

// export default class VolunteerUserService {
//   constructor(
//     private volunteersModel: VolunteerUserModel,
//   ) {}

//   async getVolunteerUserById(id: number): Promise<IVolunteerUserModel | null> {
//     const response = await this.volunteersModel.getVolunteerUserById(id);

//     return response;
//   }

//   async getVolunteerUserByEmail(email: string): Promise<IVolunteerUserModel | null> {
//     const response = await this.volunteersModel.getVolunteerUserByEmail(email);

//     return response;
//   }

//   async createVolunteerUser(volunteerData: IVolunteerData): Promise<IStatusMap> {
//     const response = await this.volunteersModel.createVolunteerUser(volunteerData);

//     return response;
//   }

//   async updateVolunteerUser(email: string, volunteerData: IVolunteerData): Promise<IStatusMap> {
//     const user = await this.volunteersModel.getVolunteerUserByEmail(email);

//     if (!user) {
//       return {
//         status: 'error',
//         message: 'Volunteer not found',
//         code: 404,
//       };
//     }

//     const response = await this.volunteersModel.updateVolunteerUser(user?.id, volunteerData);

//     return response;
//   }

//   async deleteVolunteerUser(id: number): Promise<IStatusMap> {
//     const response = await this.volunteersModel.deleteVolunteerUser(id);

//     return response;
//   }
// }
