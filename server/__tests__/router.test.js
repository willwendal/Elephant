const request = require('supertest');
const app = require('../index');
const Sequelize = require('sequelize');

describe('POST /add-event', function() {

  afterAll( async () => {
    await Sequelize.close();
  })

  it('responds with json', function(done) {
    request(app)
      .post('/add-event')
      .send({
        date: '06/18/2021',
        occasion: 'beer pong',
        location: 'codeworks'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      });
  });
});

describe('GET /my-events', function() {

  afterAll( async () => {
    await Sequelize.close();
  })

  it('responds with json', function(done) {
    return request(app)
      .get('/my-events')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      });
  });
});

describe('GET /delete', function() {

  afterAll( async () => {
    await Sequelize.close();
  })

  it('responds with json', function(done) {
    return request(app)
      .delete('/delete/30')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      });
  });
});