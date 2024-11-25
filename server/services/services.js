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