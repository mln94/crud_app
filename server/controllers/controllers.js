const Campaign = require('../models/model')
const { updatecampaign } = require('../services/services')

exports.create = async (req, res) => {
    const {title,channel,budget,startDate,endDate,results} = req.body
    try {
        await Campaign.create({title,channel,budget,startDate,endDate,results})
        res.redirect('/')
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

exports.find = async(req, res) => {
    if(req.query.id){
        console.log("id")
        const id = req.query.id
        Campaign.findById(id).then(
            data => {
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                } else{
                    res.send(data)
                }
            })
    } else {
        try{
            Campaign.find().then(campaign =>{
                res.send(campaign)
            })
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }

}



// exports.find = (req, res) => {
//     if(req.query.id) {
//         console.log("id")
//         const id = req.query.id
//         Campaign.findById(id).then(data => {
//             if(!data){
//                 res.status(404).send({ message : "Not found user with id "+ id})
//             }else{
//                 res.send(data)
//             }
//         })
//     } else {
//         Campaign.find().then(campaign => {
//             res.send(campaign)
//         }).catch(err => {
//             res.status(500).send({message : err.message})
//         })
//     }

// }

exports.update = (req, res) => {
    const id = req.params.id
    Campaign.findByIdAndUpdate(id, req.body).then(data => {
        if(!data) {
            res.status(404).send({ message : `Cannot Update campaign with ${id}. campaign not found!`})
        } else {
            res.send(data)
        }
    })
}