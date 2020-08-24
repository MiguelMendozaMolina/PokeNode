const request = require('supertest');
const app = require('../app/app');

//jest.setTimeout(15000);
describe("GET /pokemon", () => {
    it("getting name pokemon", done => {
        request(app).get("/pokemon/charmander")
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    }); 
});

/* describe('POST /pokemon', () => {
    it("getting type pokemon", done => {
        request(app).post('/pokemon')
        .send({"type": "fire"})
        .expect('Content-Type', /json/)
        .expect(200,done)
    });
});   */