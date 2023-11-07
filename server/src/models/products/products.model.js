const {products} = require("../../models/products/products.schema")
const { Auth } = require("../auth/auth.schema")

//create new product
async function createProduct(data){
    const newProduct =  new products(data)

    const savedProduct = await newProduct.save()
    return savedProduct
    
}

//update update product
async function updateProduct(id,data){
    const updatedProduct =  await products.findByIdAndUpdate(id,{
        $set:data
    },{new:true})

    return updatedProduct
}  

//delete product
async function deleteProduct(id){
    const product_deleted = await products.findByIdAndDelete(id)
}

//get all products
async function getAllProducts(query,category){
    if(query){
        const products_list = await products.find().sort({_id:-1}).limit(5)
        return products_list
    }else if(category){
        const products_list = await products.find({category:{
            $in:[category]
        }})
        return products_list
    }else{
        const products_list = await products.find().exec()
        return products_list
    }
}


module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts
}