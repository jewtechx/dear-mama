
const orders = require("express").Router()

const { HttpCreateOrders,HttpUpdateOrders,HttpDeleteOrders,HttpGetAllOrders,HttpGetMonthlyIncome } = require("./orders.controller")
const {protect} = require("../../middleware")

orders.get("/all",protect,HttpGetAllOrders)
orders.get("/income",protect,HttpGetMonthlyIncome)
orders.post("/new",HttpCreateOrders)
orders.put("/update/:id",HttpUpdateOrders)
orders.delete("/delete/:id",protect,HttpDeleteOrders)

module.exports = {orders}