const { createProduct, updateProduct,deleteProduct,getAllProducts } = require("../../models/products/products.model")
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
            const updatedProduct = await updateProduct(req.params.id,req.body)
            res.status(200).json({message:"product updated successfully"})
        }catch(err){
            res.status(500).json({error:"error updating product"})
        }
        
    }else{
        res.status(500).json({error:"you are not authorized"})
    }
}

/** 
 * Admin functionalities
 * delete product
 */
async function HttpDeleteProduct(req,res){
    if(req.user.isAdmin){
        try{
            await deleteProduct(req.params.id)
            res.status(201).json({message:"product deleted successfully"})
        }catch(err){
         res.status(404).json({
            error:"product not found"
         })
       }
}
    }

    /** 
 * Admin functionalities
 * get all products
 */
    async function HttpGetAllProducts(req,res){
        if(req.user.isAdmin){
            const query = req.query.new
            const category = req.query.category
            
            try{
                const products = await getAllProducts(query,category)// getting latest user
                res.status(200).json(products)
            }catch(err){
                res.status(500).json({error:"error getting all products"})
            }
        }else{
            res.status(500).json({error:"You are not authorized"})
        }
    }
module.exports = {
    HttpCreateProduct,
    HttpUpdateProduct,
    HttpDeleteProduct,
    HttpGetAllProducts
}
