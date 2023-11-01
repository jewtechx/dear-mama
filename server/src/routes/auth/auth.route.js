const express = require("express")

const {HttpLoginUser, HttpAdmin, HttpRegisterUser, HttpGetMe} = require("./auth.controller")

const {protect} = require("../../middleware.js")

const auth = express.Router()

auth.get('/me',HttpGetMe)
auth.post('/register',HttpRegisterUser)
auth.post('/login',HttpLoginUser)
auth.post('/admin/:id',protect,HttpAdmin)

module.exports = {
    auth
}