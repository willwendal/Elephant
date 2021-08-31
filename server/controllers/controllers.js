const db = require ('../database/db');

async function getAllEvents (req, res) {
  try {
    const data = await db.events.findAll();
    res.status(200);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(400)
    res.send(err)
  }
};

async function deleteEvent (req, res) {
  try {
    const id = req.params.id;
    const deleteEvent = await db.events.findByPk(id);

    if (deleteEvent) {
      const deleteResult = await deleteEvent.destroy();
      res.status(200)
      res.send(`${deleteResult} , event deleted`);
    } else {
      res.status(400)
      res.send('Id not found');
    }
  } catch (err) {
    console.log(err);
    res.status(400)
    res.send(err)
  }
};

async function addEvent (req, res) {
  try {
    const data = req.body;
    if (data.occasion === '' || data.date === '' || data.location === '') {
      res.status(400);
      res.send('Data cant be an empty string');
      throw new Error('Some of the received data is an empty string');
    } else {
      await db.events.sync();
      const newEvent = await db.events.create({ occasion: data.occasion, date: data.date, location: data.location });
      res.status(200);
      res.send(newEvent);
    }
  } catch (err) {
    console.log(err);
    res.status(400);
    res.send(err);
  }
};

module.exports = {
  addEvent,
  getAllEvents,
  deleteEvent
}
