const express = require('express')
const router  = express.Router()
const testController = require('../controllers/test')


router.get("/:filename",testController.testMessege)

module.exports = router