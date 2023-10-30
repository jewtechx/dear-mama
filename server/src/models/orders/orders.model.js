const {Schema,model} = require("mongoose")

const orderSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    products:[
        productId:{type:String,required:true},
        quantity:{type:Number,default:1}
    ],
    amount:{type:String,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"pending"},
},{timeStamps:true})

const order = model("order",orderSchema)

module.exports = {order}