
const cart = require("express").Router()

const { HttpCreateCart,HttpUpdateCart,HttpDeleteCart,HttpGetAllCart } = require("./cart.controller")
const {protect} = require("../../middleware")

cart.get("/all",HttpGetAllCart)
cart.post("/new",HttpCreateCart)
cart.put("/update/:id",HttpUpdateCart)
cart.delete("/delete/:id",HttpDeleteCart)

module.exports = {cart}