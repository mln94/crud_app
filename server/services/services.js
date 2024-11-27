const axios = require("axios")

exports.home = (req, res) => {
    axios.get("http://localhost:3000/getcampaign").then(
        function(response){
            res.render("index", {campaign:response.data})
        }
        
    )
}

exports.addcampaign = (req, res) => {
    res.render('addcampaign')
}

exports.updatecampaign = (req, res) => {
    res.render('updatecampaign')
}

exports.updatecampaign = (req, res) => {
    axios.get('http://localhost:3000/getcampaign', { params : { id : req.query.id }})
    .then(function(campaign){
        res.render("updatecampaign", { campaign: campaign.data})
    })
    .catch(err =>{
        res.send(err);
    })
}