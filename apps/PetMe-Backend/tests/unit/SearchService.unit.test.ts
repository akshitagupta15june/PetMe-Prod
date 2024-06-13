import { PrismaClient, Pets } from '@prisma/client';
import SearchService from '../../src/services/SearchService';

const prisma = new PrismaClient();

jest.mock('@prisma/client', () => {
  const mockFindMany = jest.fn();
  return {
    PrismaClient: jest.fn(() => ({
      pets: {
        findMany: mockFindMany,
      },
    })),
  };
});

describe('SearchService', () => {
  let searchService: SearchService;

  beforeAll(() => {
    searchService = new SearchService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return filtered pets based on the provided filters', async () => {
    const filters = {
      type: 'dog',
      breed: 'labrador',
      age: 'young',
      size: 'large',
      gender: 'male',
      location: 'New York',
      adoptionFee: 'under_50',
    };

    const mockPets: Pets[] = [
      {
        id: '1',
        name: 'Buddy',
        color_id: '1',
        pet_img: 'image_url',
        breed_id: '1',
        type_id: '1',
        gender: 'male',
        age: 'young',
        size: 'large',
        location: 'New York',
        adoption_fee: 'under_50',
      },
    ];

    (prisma.pets.findMany as jest.Mock).mockResolvedValue(mockPets);

    const pets = await searchService.searchPets(filters);

    expect(pets).toEqual(mockPets);
    expect(prisma.pets.findMany).toHaveBeenCalledWith({
      where: {
        type_id: filters.type,
        breed_id: filters.breed,
        age: filters.age,
        size: filters.size,
        gender: filters.gender,
        location: {
          contains: filters.location,
        },
        adoption_fee: filters.adoptionFee,
      },
    });
  });
});
