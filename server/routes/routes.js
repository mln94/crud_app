const express = require('express')
const Router = express.Router()
const services = require("../services/services")

Router.get('/', services.home)
Router.get('/addcampaign', services.addcampaign)


module.exports = Router