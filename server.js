const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')
app.set('views', __dirname + '/views')

app.use("/", require("./server/routes/routes"))

app.listen(process.env.PORT || port, console.log(`Connecter to the server on port ${port}`))