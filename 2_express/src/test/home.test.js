import request from 'supertest';
import app from '../app';
import list from '../../list.json';

describe(`Test the index`, () => {
  test(`it should return json data with get method with 200 code status`, () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe(`Test the output from index`, () => {
  test(`it should return json data like file list.json`, () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(JSON.parse(response.text)).toEqual(list);
      });
  });
});

