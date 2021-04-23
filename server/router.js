const express = require('express')
const router = express.Router()
const controllers = require('./controllers/controllers')

router.get('/my-events', controllers.getEventsInfo)
router.get('/my-events-details' /* controllers.getEventsInfo */)
router.post('/add-event', controllers.postEventsInfo)
// router.delete('/my-events', controllers.deleteEventsInfo);

module.exports = router
