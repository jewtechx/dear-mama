const express = require("express")

const {auth} = require("./routes/auth/auth.route")
const {products} = require("./routes/products/products.route")
const {cart} = require("./routes/cart/cart.route")
const {orders} = require("./routes/orders/orders.route")
const {stripeRouter} = require("./stripe")

const v1 = express.Router()

v1.use('/auth',auth)
v1.use('/products',products)
v1.use('/cart',cart)
v1.use('/orders',orders)
v1.use('/stripe',stripeRouter)

module.exports = {
    v1
}