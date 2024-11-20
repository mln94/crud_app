const express = require('express')
const Router = express.Router()
const services = require("../services/services")
const controllers = require("../controllers/controllers")

Router.get('/', services.home)
Router.get('/addcampaign', services.addcampaign)

Router.post('/addnewcampaign',controllers.create)

module.exports = Router