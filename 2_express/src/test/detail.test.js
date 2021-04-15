import request from 'supertest';
import app from '../app';
import logModel from '../model/logModel'

describe(`Test the detail`, () => {
  test(`it should return json data with get method with 200 code status`, async() => {
    const response = await request(app) .get("/detail/tt4853102");
    expect(response.statusCode).toBe(200);
    afterAll(async done => {
      await logModel.sequelize.close();
      done();
    });
  });
});