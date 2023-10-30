const {Schema,model} = require("mongoose")

const cartSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    products:[
        productId:{type:String,required:true},
        quantity:{type:Number,default:1}
    ]
},{timeStamps:true})

const cart = model("cart",cartSchema)

module.exports = {cart}