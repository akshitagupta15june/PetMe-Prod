export interface IVolunteerData {
  id: number;
  firstName: string;
  lastName: string | null;
  email: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  phoneNumber: string;
}

export interface IVolunteerUserModel {
  id: number;
  first_name: string;
  last_name: string | null;
  email: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  phone_number: string;
}