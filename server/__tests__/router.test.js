const request = require('supertest');
const app = require('../index');
const Sequelize = require('sequelize');
const { response } = require('../index');
const db = require ('../database/db');

describe('POST /add-event', function() {
  afterAll( async () => {
    await Sequelize.close();
  })
  it('responds with json', function(done) {
    request(app)
      .post('/add-event')
      .send({
        date: '06/18/2021',
        occasion: 'testOccasion',
        location: 'testLocation'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        cleanUp()
        return done();
      });
  });
  async function cleanUp() {
    try {
      const event = await db.events.findOne({
        where: {
          occasion: 'testOccasion'
        }
      });
      await event.destroy();
    } catch (error) {
      console.log(error);
    }
  }
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
  
  async function addEvent () {
    try{
      await db.events.sync();
      const newEvent = await db.events.create({ 
      occasion: 'testOccasion', 
      date: 'testDate',
      location: 'testLocation'
      });
      return parseInt(newEvent._id)
    }
    catch(err) {
      console.log(err)
    }

  }

  it('responds with json', async function(done) {
    const id = await addEvent()
    return await request(app)
      .delete(`/delete/${id}`)
      .set('Accept', 'application/json')
      .expect(200)
      .then( () => {
        done()
      }
      )
      .catch(err => done(err))
  });
});