const express = require('express');
const router = express.Router();
const controllers = require('./controllers/controllers');

router.get('/my-events/:id', controllers.getEventsByUid);
router.post('/add-event/:id', controllers.addEvent);
router.post('/add-user', controllers.addUser);


module.exports = router;
