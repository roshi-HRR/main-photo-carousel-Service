const app = require('../server/app.js');
const request = require('supertest');

describe('test basic get call', () => {
  test('It should send 200 response from GET method', async () => {
    const response = await request(app).get('/api/photos');
    expect(response.statusCode).toBe(200);
  })
})
