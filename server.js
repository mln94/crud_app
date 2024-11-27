const express = require('express')
const app = express()
const port = 3000

require('dotenv').config()

const connectionDB = require('./server/connection/database')

app.set('view engine','ejs')
app.set('views', __dirname + '/views')

app.use(express.json())
app.use(express.urlencoded())

app.use("/", require("./server/routes/routes"))
app.use(express.static("assets"))
app.listen(process.env.PORT || port, console.log(`Connecter to the server on port ${port}`))