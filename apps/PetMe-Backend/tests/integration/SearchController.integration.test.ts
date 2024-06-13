import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import SearchService from '../../src/services/SearchService';
import SearchController from '../../src/controllers/SearchController';

const app = express();
app.use(bodyParser.json());

const searchService = new SearchService();
const searchController = new SearchController(searchService);

app.get('/search', (req, res) => searchController.searchPets(req, res));

jest.mock('../../src/services/SearchService');

describe('SearchController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return search results based on query parameters', async () => {
    const mockPets = [
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

    (SearchService.prototype.searchPets as jest.Mock).mockResolvedValue(mockPets);

    const response = await request(app)
      .get('/search')
      .query({
        type: 'dog',
        breed: 'labrador',
        age: 'young',
        size: 'large',
        gender: 'male',
        location: 'New York',
        adoptionFee: 'under_50',
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Search results',
      pets: mockPets,
    });
    expect(SearchService.prototype.searchPets).toHaveBeenCalledWith({
      type: 'dog',
      breed: 'labrador',
      age: 'young',
      size: 'large',
      gender: 'male',
      location: 'New York',
      adoptionFee: 'under_50',
    });
  });

  it('should handle errors gracefully', async () => {
    jest.spyOn(searchService, 'searchPets').mockImplementation(() => {
        throw new Error('Something went wrong');
      });
  
      const response = await request(app).get('/search').query({ type: 'dog' });
  
      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        message: 'Error while searching pets',
        error: 'Something went wrong',
      });
  });
});
