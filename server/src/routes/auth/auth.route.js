const express = require("express")

const {getMe, HttpRegisterUser, HttpGetMe} = require("./auth.controller")

const auth = express.Router()

auth.get('/me',HttpGetMe)
auth.post('/register',HttpRegisterUser)

module.exports = {
    auth
}