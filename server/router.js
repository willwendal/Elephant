const express = require('express')
const router = express.Router()
const controllers = require('./controllers/controllers')

router.get('/my-events', controllers.getEventsInfo)
router.delete('/my-events/:id', controllers.deleteEvent)
router.post('/add-event', controllers.postEventsInfo)


module.exports = router
