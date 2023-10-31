const express = require("express")

const {HttpLoginUser, HttpEditUser, HttpRegisterUser, HttpGetMe, HttpDeleteUser, HttpGetAllUsers} = require("./auth.controller")

const {protect} = require("../../middleware")

const auth = express.Router()

auth.get('/me',protect,HttpGetMe)
auth.get('/all_users',protect,HttpGetAllUsers)
auth.post('/register',HttpRegisterUser)
auth.post('/login',HttpLoginUser)
auth.put('/edit/:id',protect,HttpEditUser)
auth.delete('/delete/:id',protect,HttpDeleteUser)

module.exports = {
    auth
}