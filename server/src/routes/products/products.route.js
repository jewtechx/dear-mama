
const products = require("express").Router()

const { HttpCreateProduct,HttpUpdateProduct,HttpDeleteProduct,HttpGetAllProducts } = require("./products.controller")
const {protect} = require("../../middleware")

products.get("/all",protect,HttpGetAllProducts)
products.post("/new",protect,HttpCreateProduct)
products.put("/update/:id",protect,HttpUpdateProduct)
products.delete("/delete/:id",protect,HttpDeleteProduct)

module.exports = {products}