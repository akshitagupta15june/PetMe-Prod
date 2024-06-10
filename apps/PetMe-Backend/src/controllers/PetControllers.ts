import { Request, Response } from "express"
import prisma from "../db" // Ensure prisma is correctly imported and initialized
import PetServices from "../services/PetServices"
import IStatusMap from "../interfaces/StatusMap/StatusMap"

export default class PetController {
  // PetServices: any
  constructor(private petService: PetServices) { }

  public async fetchPets(req: Request, res: Response): Promise<void> {
    try {
      const pets = await prisma.pets.findMany({
        include: {
          pet_breed: true,
          pet_color: true,
          pet_type: true,
          Donate_Pets: true,
        },
      })
      // Validate response
      if (!Array.isArray(pets)) {
        throw new Error("Unexpected response format")
      }

      res.status(200).json({ msg: "Pets fetched successfully", data: pets })
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred"
      res.status(500).json({ error: errorMessage })
    }
  }

  public async fetchPetById(req: Request, res: Response): Promise<void> {
    try {
      const { petId } = req.params
      const pet = await prisma.pets.findUnique({
        where: {
          id: String(petId), // Ensure id is correctly typed
        },
        include: {
          pet_breed: true,
          pet_color: true,
          pet_type: true,
          Donate_Pets: true,
        },
      })
      if (!pet) {
        res.status(404).json({ error: "Pet not found" })
        return
      }

      res.status(200).json({ msg: "Pet fetched successfully", data: pet })
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred"
      res.status(500).json({ error: errorMessage })
    }
  }

  public async createSosPets(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body
      const response = await this.petService.sosPetsService(body)
      if (!response) {
        return res.status(500).json({
          message: "SOS not created",
        })
      }

      return res.status(200).json({
        msg: "success",
        response,
      })
    } catch (error) {
      return res.status(500).json({
        message: "Error while reporting",
        error,
      })
    }
  }

  public async createDonationForPets(req: Request, res: Response): Promise<Response> {
    try {
       const body = req.body
       const response = await this.petService.donatePetsService(body);
       if (!response) {
        return res.status(500).json({
          message: "Donation failed",
        })
      }

      return res.status(200).json({
        msg: "success",
        response,
      })
    } catch (error) {
      return res.status(500).json({
        message: "Error while donating",
        error,
      })
    }
  }
}
