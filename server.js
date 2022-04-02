const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const languageHandler = require("./routes/")

const PORT = process.env.PORT || 8888
const CALLBACK = () => console.log(`Server running on port ${PORT}`)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/language", languageHandler)

app.listen(PORT, CALLBACK)

module.exports = app