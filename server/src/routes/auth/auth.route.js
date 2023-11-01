const express = require("express")

<<<<<<< HEAD
const {HttpLoginUser, HttpAdmin, HttpRegisterUser, HttpGetMe} = require("./auth.controller")

const {protect} = require("../../middleware.js")
=======
const {HttpLoginUser, HttpEditUser, HttpRegisterUser, HttpGetMe, HttpDeleteUser, HttpGetAllUsers, HttpGetUserStats} = require("./auth.controller")

const {protect} = require("../../middleware")
>>>>>>> refs/remotes/origin/main

const auth = express.Router()

auth.get('/me',protect,HttpGetMe)
auth.get('/all_users',protect,HttpGetAllUsers)
auth.get('/user_stats',protect,HttpGetUserStats)
auth.post('/register',HttpRegisterUser)
auth.post('/login',HttpLoginUser)
<<<<<<< HEAD
auth.post('/admin/:id',protect,HttpAdmin)
=======
auth.put('/edit/:id',protect,HttpEditUser)
auth.delete('/delete/:id',protect,HttpDeleteUser)
>>>>>>> refs/remotes/origin/main

module.exports = {
    auth
}