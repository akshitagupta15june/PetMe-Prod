import { z } from 'zod';

export const IuserDataSchema = z.object({
  id: z.string().optional(), // Validate positive ID
  first_name: z.string().min(1,{ message: 'First name is required' }), // Required with message
  last_name: z.string().min(1,{ message: 'Last name is required' }), // Required with message
  email: z.string().min(1,{ message: 'Email is required' }).email({ message: 'Invalid email format' }), // Email validation with message
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }), // Minimum password length with message
  address: z.string().min(1,{ message: 'Address is required' }), // Required with message
  city: z.string().min(1,{ message: 'City is required' }), // Required with message
  state: z.string().min(1,{ message: 'State is required' }), // Required with message
  country: z.string().min(1,{ message: 'Country is required' }), // Required with message
  zip_code: z.string().min(1,{ message: 'Zip code is required' }), // Required with message
  phone_number: z.string().min(10,{message: "phone number is required and it should be min length of 10"}), // Allow null for phone_number
  role: z.array(z.string()).optional(), // Array of strings for roles
  otp: z.string().optional(), // Allow null for otp
  token: z.string().optional(), // Allow null for token
  google_id: z.optional(z.string({message: 'Google ID can be empty, but must be a string if provided'})), // Optional with message
});


