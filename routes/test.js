const express = require('express')
const router  = express.Router()
const testController = require('../controllers/test')

router.get("/api/test",testController.testMessege)
modules.exports = router