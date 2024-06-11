import { Request, Response } from "express"
import PetController from "../controllers/PetControllers"
import PetModel from "../models/PetModels"
import PetServices from "../services/PetServices"
import prisma from "../db"
import { Router } from "express"

const PetRoutes = Router()

const petModel = new PetModel()
const petServices = new PetServices(petModel)
const petController = new PetController(petServices)

PetRoutes.post("/donate", (req, res) => {
  petController.createDonationForPets(req, res);
})

PetRoutes.post("/SOS", async (req, res) => {
  petController.createSosPets(req, res);
})

PetRoutes.get("/bulk", (req, res) => {
  petController.fetchPets(req, res)
})

PetRoutes.get("/:petId", (req, res) => {
  petController.fetchPetById(req, res)
})

PetRoutes.put("/:petId/adopt", (req, res) => {})

export default PetRoutes
