
const products = require("express").Router()

const { HttpCreateProduct,HttpUpdateProduct } = require("./products.controller")
const {protect} = require("../../middleware")

products.post("/new",protect,HttpCreateProduct)
products.post("/update",protect,HttpUpdateProduct)

module.exports = {products}