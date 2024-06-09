import { SOS_Pets } from "@prisma/client"
import prisma from "../db"
import SosPets from "../interfaces/Pet/SosPets"
import IStatusMap from "../interfaces/StatusMap/StatusMap"

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
}


