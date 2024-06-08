import prisma from "../db"

export default class PetModel {
  private prisma = prisma
  async fetchPetById(petId: string) {
    return await prisma.pets.findUnique({
      where: {
        id: petId,
      },
    })
  }

  async fetchPets() {
    return await prisma.pets.findMany()
  }
}
