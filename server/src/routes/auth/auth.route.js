const express = require("express")


const {protect} = require("../../middleware.js")
const {HttpLoginUser, HttpAdmin, HttpEditUser, HttpRegisterUser, HttpGetMe, HttpDeleteUser, HttpGetAllUsers, HttpGetUserStats} = require("./auth.controller")

const auth = express.Router()

auth.get('/me',protect,HttpGetMe)
auth.get('/all_users',protect,HttpGetAllUsers)
auth.get('/user_stats',protect,HttpGetUserStats)
auth.post('/register',HttpRegisterUser)
auth.post('/login',HttpLoginUser)
auth.post('/admin/:id',protect,HttpAdmin)
auth.put('/edit/:id',protect,HttpEditUser)
auth.delete('/delete/:id',protect,HttpDeleteUser)

module.exports = {
    auth
}