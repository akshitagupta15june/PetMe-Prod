import { SOS_Pets } from "@prisma/client"
import prisma from "../db"
import SosPets from "../interfaces/Pet/SosPets"
import IStatusMap from "../interfaces/StatusMap/StatusMap"
import DonatePets from "../interfaces/Pet/DonatePet"
import { Pets } from '@prisma/client';

export default class PetModel {
  private prisma = prisma
  async fetchPetById(petId: string) {
    return await prisma.pets.findUnique({
      where: {
        id: petId,
      },
    })
  }

  async fetchPets(filters: any = {}): Promise<Pets[]> {
    const { type, breed, age, size, gender, location, adoptionFee } = filters
  
    const whereConditions: any[] = []
  
    if (type) {
      whereConditions.push({
        type_id: type,
      })
    }
  
    if (breed) {
      whereConditions.push({
        breed_id: breed,
      })
    }
  
    if (age) {
      whereConditions.push({
        age: age,
      })
    }
  
    if (size) {
      whereConditions.push({
        size: size,
      })
    }
  
    if (gender) {
      whereConditions.push({
        gender: gender,
      })
    }
  
    if (location) {
      whereConditions.push({
        location: location,
      })
    }
  
    if (adoptionFee) {
      whereConditions.push({
        adoption_fee: adoptionFee,
      })
    }
  
    if (whereConditions.length === 0) {
      return await prisma.pets.findMany() // Return all pets if no filters are provided
    }
  
    return await prisma.pets.findMany({
      where: {
        AND: whereConditions,
      },
    })
  }
  

  async sosPetsModel(sosPetsData: SosPets): Promise<IStatusMap> {
    await this.prisma.sOS_Pets.create({
      data: {
        landmark: sosPetsData.landmark,
        Pet_Condition: sosPetsData.petCondition,
        Additional_Desc: sosPetsData.additionalDesc,
        type_id: sosPetsData.typeId,
        report_user_id: sosPetsData.report_user_id
      },
    })
    return {
      status: "success",
      message: "Reported successfully",
      code: 200,
    }
  }

  async donatePetsModel(donatePetsData: DonatePets): Promise<IStatusMap> {
    await this.prisma.pets.create({
      data: {
        // pet_type: donatePetsData.petType,
        pet_img: donatePetsData.petImg,
        name: donatePetsData.petName,
        type_id: donatePetsData.typeId,
        breed_id: donatePetsData.breedId,
        color_id: donatePetsData.colorId
      },
    })
    return {
      status: "success",
      message: "Donated successfully",
      code: 200,
    }
  }
}


