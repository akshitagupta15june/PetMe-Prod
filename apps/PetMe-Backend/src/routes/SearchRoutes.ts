import { Router } from "express";
import SearchService from "../services/SearchService";
import SearchController from "../controllers/SearchController";

const router = Router();
const searchService = new SearchService();
const searchController = new SearchController(searchService);

router.get("/search", (req, res) => searchController.searchPets(req, res));

export default router;
