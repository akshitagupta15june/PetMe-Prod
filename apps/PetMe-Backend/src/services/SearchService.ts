import { Pets } from "@prisma/client";
import prisma from "../db";
import { Search } from "../interfaces/Search/Search";

export default class SearchService implements Search{
  private prisma = prisma;

  public async searchPets(filters: any): Promise<Pets[]> {
    const {
      type,
      breed,
      age,
      size,
      gender,
      location,
      adoptionFee,
    } = filters;

    const where: any = {};

    if (type) where.type_id = type;
    if (breed) where.breed_id = breed;
    if (age) where.age = age;
    if (size) where.size = size;
    if (gender) where.gender = gender;
    if (location) where.location = { contains: location };
    if (adoptionFee) where.adoption_fee = adoptionFee;

    const pets = await this.prisma.pets.findMany({
      where,
    });

    return pets;
  }
}
