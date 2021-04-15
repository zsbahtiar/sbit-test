import request from 'supertest';
import app from '../app';
import logModel from '../model/logModel'

describe(`Test the detail`, () => {
  test(`it should return array json data with get method with 200 code status`, async() => {
    const response = await request(app) .get("/search?q=batman");
    expect(response.statusCode).toBe(200);
    afterAll(async done => {
      await logModel.sequelize.close();
      done();
    });
  });
});

describe(`Test the detail`, () => {
  test(`it should return array json data with get method with 200 code status`, async() => {
    const response = await request(app) .get("/search?q=cat");
    expect(response.statusCode).toBe(200);
    afterAll(async done => {
      await logModel.sequelize.close();
      done();
    });
  });
});


describe(`Test the detail`, () => {
  test(`it should return array json data with get method with 200 code status`, async() => {
    const response = await request(app) .get("/search?q=fast");
    expect(response.statusCode).toBe(200);
    afterAll(async done => {
      await logModel.sequelize.close();
      done();
    });
  });
});


describe(`Test the detail`, () => {
  test(`it should return array json data with get method with 200 code status`, async() => {
    const response = await request(app) .get("/search?q=spiderman");
    expect(response.statusCode).toBe(200);
    afterAll(async done => {
      await logModel.sequelize.close();
      done();
    });
  });
});



describe(`Test the detail`, () => {
  test(`it should return array json data with get method with 200 code status`, async() => {
    const response = await request(app) .get("/search?q=iron");
    expect(response.statusCode).toBe(200);
    afterAll(async done => {
      await logModel.sequelize.close();
      done();
    });
  });
});


describe(`Test the detail`, () => {
  test(`it should return array json data with get method with 200 code status`, async() => {
    const response = await request(app) .get("/search?q=superman");
    expect(response.statusCode).toBe(200);
    afterAll(async done => {
      await logModel.sequelize.close();
      done();
    });
  });
});