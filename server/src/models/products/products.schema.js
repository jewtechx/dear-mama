const {Schema,model} = require("mongoose")

const productsSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    desc:{type:String,required:true},
    desc:{type:String,required:true},
    image:{type:String,required:true},
    category:{type:Array,required:true},
    size:{type:Number,required:true},
    color:{type:String,required:true},
    price:{type:String,required:true},
},{timeStamps:true})

const products = model("products",productsSchema)

module.exports = {products}