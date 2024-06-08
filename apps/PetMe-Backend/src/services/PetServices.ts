import PetModel from '../models/PetModels';
import Pets from '../interfaces/Pet/Pets';

export default class PetServices {
    constructor(
        private petModel: PetModel,
    ) { }

    async getPetById(petId: string): Promise<Pets | null> {
        try {
            const response = await this.petModel.fetchPetById(petId);
            return response;
        } catch (error) {
            console.error('Error fetching pet by ID:', error);
            return null;
        }
    }

    async getPets(): Promise<Pets[] | null> {
        try {
            const response = await this.petModel.fetchPets();
            return response;
        } catch (error) {
            console.error('Error fetching pets:', error);
            return null;
        }
    }
}
