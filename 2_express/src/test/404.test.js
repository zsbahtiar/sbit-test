import request from 'supertest';
import app from '../app';

describe(`Test the index`, () => {
  test(`it should return json data with get method with 200 code status`, () => {
    return request(app)
      .get("/ada")
      .then(response => {
        expect(response.statusCode).toBe(404);
      });
  });
});

