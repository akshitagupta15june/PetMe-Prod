import { Request, Response } from "express";
import { Search } from "../interfaces/Search/Search";

export default class SearchController {
  constructor(private searchService: Search) {}

  public async searchPets(req: Request, res: Response): Promise<Response> {
    try {
      const filters: any = {};

      if (req.query.type) filters.type = req.query.type as string;
      if (req.query.breed) filters.breed = req.query.breed as string;
      if (req.query.age) filters.age = req.query.age as string;
      if (req.query.size) filters.size = req.query.size as string;
      if (req.query.gender) filters.gender = req.query.gender as string;
      if (req.query.location) filters.location = req.query.location as string;
      if (req.query.adoptionFee) filters.adoptionFee = req.query.adoptionFee as string;

      const pets = await this.searchService.searchPets(filters);

      return res.status(200).json({
        message: "Search results",
        pets,
      });
    } catch (error) {
      return res.status(500).json({
      message: "Error while searching pets",
      error: 'Something went wrong',
    });
    }
  }
}
