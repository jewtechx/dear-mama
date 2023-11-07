const {Orders} = require("../../models/orders/orders.schema")

//create new Orders
async function createOrders(data){
    const newOrders =  new Orders(data)

    const savedOrders = await newOrders.save()
    return savedOrders
    
}

//update update Orders
async function updateOrders(id,data){
    const updatedOrders =  await Orders.findByIdAndUpdate(id,{
        $set:data
    },{new:true})

    return updatedOrders
}  

//delete Orders
async function deleteOrders(id){
    const Orders_deleted = await Orders.findByIdAndDelete(id)
}

//get all Orderss
async function getAllOrders(query,category){
    if(query){
        const Orderss_list = await Orders.find().sort({_id:-1}).limit(5)
        return Orderss_list
    }else if(category){
        const Orderss_list = await Orders.find({category:{
            $in:[category]
        }})
        return Orderss_list
    }else{
        const Orderss_list = await Orders.find().exec()
        return Orderss_list
    }
}

//get monthly income'
async function getMonthlyIncome(previousMonth){
    const income = await Orders.aggregate([
        {$match:{createdAt : {$gte : previousMonth}}},
        {
            $project : {
                month:{$month : "$createdAt"},
                sales:"$amount"
            }
        },
        {
            $group:{
                _id:"$month",
                total:{$sum : "$sales"}
            }
        }
    ])
    return income
}
module.exports = {
    createOrders,
    updateOrders,
    deleteOrders,
    getAllOrders,
    getMonthlyIncome
}