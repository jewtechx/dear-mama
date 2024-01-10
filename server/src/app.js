const express = require("express")

const cors = require("cors")

const path = require('path')

const fs = require('fs')

const {v1} = require("./v1")

const app = express()

app.use(express.json())

// app.use(cors({
//     origin:["http://localhost:5173"]
// }))

app.use('/v1',v1)

app.use(express.static(path.join(__dirname,'..','public')))

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname,'..','public','index.html'))
})

module.exports = {
    app
}