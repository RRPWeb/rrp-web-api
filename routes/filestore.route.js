const express = require('express')
const filestoreRouter  = express.Router()
const filestoreController = require('../controllers/filestore.controller')


filestoreRouter.get("/:filename",filestoreController.getfile)

module.exports = filestoreRouter