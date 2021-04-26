const Events = require('../models/schema')

async function getEventsInfo (req, res) {
  try {
    const events = await Events.find()
    JSON.stringify(events)
    console.log(events)
    res.send(events)
    res.status(201)
  } catch (err) {
    res.status(400)
    res.send(err)
  }
};

// async function getEventsById (req, res) {

//   console.log(req.params);
//   console.log('in id func');

//   try {
//     const event = await Events.findById()
//     JSON.stringify(event)
//     res.send(event)
//     res.status(201)
//   } catch (err) {
//     res.status(400)
//     res.send(err)
//   }
// };

async function postEventsInfo (req, res) {
  try {
    const { occasion, date, location } = req.body;
    const event = await Events.create({ occasion, date, location })
    res.status(201)
    res.send(event)
  } catch (err) {
    res.status(400)
    res.send(err)
  }
};

module.exports = {
  getEventsInfo,
  // getEventsById,
  postEventsInfo
}
