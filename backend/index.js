const express = require("express")
require('dotenv').config()
const app = express()
const bodyParser = require('body-parser')
const routes=require("./src/routes/route")
require("./src/config/config")
const cors = require('cors')
const PORT=process.env.Port


app.use(cors())

app.use(bodyParser.json())
app.use("/",routes)

app.listen(PORT, () => {
	console.log("Server has started!")
})