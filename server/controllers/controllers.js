const Event = require ('../database/models/event.model');

async function getEventsByUid (req, res) {
  try {
    console.log('get by id');
    console.log(req.params);
    // const events = await Events.find()
    // JSON.stringify(events)
    // console.log(events)
    // res.send(events)
    // res.status(201)
  } catch (err) {
    res.status(400)
    res.send(err)
  }
};

async function addEvent (req, res) {
  try {
    console.log('add event');
    console.log(req.params);
    // const { occasion, date, location } = req.body;
    // const event = await Events.create({ occasion, date, location })
    // res.status(201)
    // res.send(event)
  } catch (err) {
    res.status(400)
    res.send(err)
  }
};

async function addUser (req, res) {
  try {
    console.log('add user');
    // const { occasion, date, location } = req.body;
    // const event = await Events.create({ occasion, date, location })
    // res.status(201)
    // res.send(event)
  } catch (err) {
    res.status(400)
    res.send(err)
  }
};

module.exports = {
  getEventsByUid,
  addEvent,
  addUser
}
