const { createCart, updateCart,deleteCart,getAllCart } = require("../../models/cart/cart.model")

/** 
 * create cart
 */
async function HttpCreateCart(req,res){
  
        try{
            const newCart = await createCart(req.body)
            res.status(200).json({message:"Cart created successfully"})
        }catch(err){
            res.status(500).json({error:"error creating cart"})
        }

}
/** 
 * update cart
 */
async function HttpUpdateCart(req,res){
        try{
            const updatedCart = await updateCart(req.params.id,req.body)
            res.status(200).json({message:"cart updated successfully"})
        }catch(err){
            res.status(500).json({error:"error updating cart"})
        }

}

/** 
 * delete cart
 */
async function HttpDeleteCart(req,res){
        try{
            await deleteCart(req.params.id)
            res.status(201).json({message:"cart deleted successfully"})
        }catch(err){
        //  res.status(404).json({
        //     error:"cart not found"
        //  })
        console.log(err)
       }
    }

    /** 
 * get all cart
 */
    async function HttpGetAllCart(req,res){
            const query = req.query.new
            const category = req.query.category
            
            try{
                const products = await getAllCart(query,category)// getting latest user
                res.status(200).json(products)
            }catch(err){
                res.status(500).json({error:"error getting all products"})
            }
        }

module.exports = {
    HttpCreateCart,
    HttpUpdateCart,
    HttpDeleteCart,
    HttpGetAllCart
}
