const express = require('express')
const router = express.Router()
const controllers = require('./controllers/controllers')

router.get('/my-events', controllers.getEventsInfo)
// router.get('/my-events/:id', controllers.getEventsById)
// router.post('/my-events', controllers.getEventsInfo)
router.post('/add-event', controllers.postEventsInfo)
// router.put('/my-events/:id', controllers.getEventsInfo)


module.exports = router
