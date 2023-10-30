const express = require("express")

const {HttpLoginUser, HttpEditUser, HttpRegisterUser, HttpGetMe} = require("./auth.controller")

const auth = express.Router()

auth.get('/me',HttpGetMe)
auth.post('/register',HttpRegisterUser)
auth.post('/login',HttpLoginUser)
auth.post('/login/:id',HttpEditUser)

module.exports = {
    auth
}