const { createProduct, updateProduct } = require("../../models/products/products.model")
const {products} = require("../../models/products/products.schema")

/** 
 * Admin functionalities
 * create product
 */
async function HttpCreateProduct(req,res){
    if(req.user.isAdmin){
        try{
            const newProduct = await createProduct(req.body)
            res.status(200).json({message:"product created successfully"})
        }catch(err){
            res.status(500).json({error:"error creating product"})
        }
        
    }else{
        res.status(500).json({error:"you are not authorized"})
    }
}
/** 
 * Admin functionalities
 * update product
 */
async function HttpUpdateProduct(req,res){
    if(req.user.isAdmin){
        try{
            const updatedProduct = await updateProduct(req.body)
            res.status(200).json({message:"product updated successfully"})
        }catch(err){
            res.status(500).json({error:"error updating product"})
        }
        
    }else{
        res.status(500).json({error:"you are not authorized"})
    }
}


module.exports = {
    HttpCreateProduct,
    HttpUpdateProduct
}
