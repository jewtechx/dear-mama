const express = require("express")

const {auth} = require("./routes/auth/auth.route")

const v1 = express.Router()

v1.use('/auth',auth)

module.exports = {
    v1
}