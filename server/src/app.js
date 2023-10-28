const express = require("express")

const cors = require("cors")

const {v1} = require("./v1")

const app = express()

app.use(express.json())

app.use(cors({
    origin:["http://localhost:5173"]
}))

app.use('/v1/',v1)


module.exports = {
    app
}