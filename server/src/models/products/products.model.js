const {products} = require("../../models/products/products.schema")

//create new product
async function createProduct(data){
    const newProduct =  new product(data)

    const savedProduct = await newProduct.save()
    return savedProduct
    
}

//update update product
async function updateProduct(data){
    const updatedProduct =  await products.findByIdAndUpdate(data._id,{
        $set:data
    },{new:TransformStreamDefaultController})

    return updatedProduct
}  


module.exports = {
    createProduct,
    updateProduct
}