const express = require('express')
const Router = express.Router()
const services = require("../services/services")
const controllers = require("../controllers/controllers")

Router.get('/', services.home)
Router.get('/addcampaign', services.addcampaign)
Router.get('/updatecampaign', services.updatecampaign)

Router.post('/addnewcampaign',controllers.create)
Router.get('/getcampaign',controllers.find)

Router.put('/getcampaign/:id', controllers.update)

module.exports = Router