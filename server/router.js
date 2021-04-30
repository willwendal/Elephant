const express = require('express');
const router = express.Router();
const controllers = require('./controllers/controllers');

router.get('/my-events/:id', controllers.getEventsByUid);
router.get('/my-events', controllers.getAllEvents);
router.post('/add-event', controllers.addEvent);
router.post('/add-user', controllers.addUser);
router.delete('/delete/:id', controllers.deleteEvent);


module.exports = router;
