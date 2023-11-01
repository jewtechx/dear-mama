const express = require("express")

const {auth} = require("./routes/auth/auth.route")
const {products} = require("./routes/products/products.route")

const v1 = express.Router()

v1.use('/auth',auth)
v1.use('/products',products)

module.exports = {
    v1
}