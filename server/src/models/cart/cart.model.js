const {cart} = require("../../models/cart/cart.schema")
const mongoose = require("mongoose")

//create new cart
async function createCart(data){
    const newCart =  new cart(data)

    const savedCart = await newCart.save()
    return savedCart
    
}

//update cart
async function updateCart(id,data){
    const updatedCart =  await cart.findByIdAndUpdate(id,{
        $set:data
    },{new:true})

    return updatedCart
}  

//delete cart
async function deleteCart(id) {
    const validId = new mongoose.Types.ObjectId(id)
    const cart_deleted = await cart.findByIdAndDelete(validId);
  }

//get all cart
async function getAllCart(query,category){
    if(query){
        const cart_list = await cart.find().sort({_id:-1}).limit(5)
        return cart_list
    }else if(category){
        const cart_list = await cart.find({category:{
            $in:[category]
        }})
        return cart_list
    }else{
        const cart_list = await cart.find().exec()
        return cart_list
    }
}


module.exports = {
    createCart,
    updateCart,
    deleteCart,
    getAllCart
}