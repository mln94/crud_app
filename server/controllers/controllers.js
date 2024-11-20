const Campaign = require('../models/model')

exports.create = async (req, res) => {
    const {title,channel,budget,startDate,endDate,results} = req.body
    try {
        await Campaign.create({title,channel,budget,startDate,endDate,results})
        res.redirect('/')
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}