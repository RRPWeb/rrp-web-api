const express = require('express')
const router  = express.Router()
const testController = require('../controllers/test')
/**
 * @swagger
 * /api/test:
 * get:
 *     summery:This api is used to check if get method is working
 *     responses:
 *        200:
 *           description: To test Get method
 */

router.get("/api/test",testController.testMessege)
module.exports = router