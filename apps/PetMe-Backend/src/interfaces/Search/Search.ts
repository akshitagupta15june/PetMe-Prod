// interfaces/IAdoptionService.ts
import { Pets } from "@prisma/client";

export interface Search {
  searchPets(filters: any): Promise<Pets[]>;
}
