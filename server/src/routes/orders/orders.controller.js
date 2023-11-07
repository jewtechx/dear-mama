const { createOrders, updateOrders,deleteOrders,getAllOrders,getMonthlyIncome } = require("../../models/orders/orders.model")

/** 
 * create Orders
 */
async function HttpCreateOrders(req,res){
    
        try{
            const newOrders = await createOrders(req.body)
            res.status(200).json({message:"Orders created successfully"})
        }catch(err){
            res.status(500).json({error:"error creating Orders"})
        }

}
/** 
 * Admin functionalities
 * update Orders
 */
async function HttpUpdateOrders(req,res){
        try{
            const updatedOrders = await updateOrders(req.params.id,req.body)
            res.status(200).json({message:"Orders updated successfully"})
        }catch(err){
            res.status(500).json({error:"error updating Orders"})
        }
}

/** 
 * Admin functionalities
 * delete Orders
 */
async function HttpDeleteOrders(req,res){
    if(req.user.isAdmin){
        try{
            await deleteOrders(req.params.id)
            res.status(201).json({message:"Orders deleted successfully"})
        }catch(err){
         res.status(404).json({
            error:"Orders not found"
         })
       }
}
    }

    /** 
 * Admin functionalities
 * get all Orderss
 */
    async function HttpGetAllOrders(req,res){
        if(req.user.isAdmin){
            const query = req.query.new
            try{
                const Orderss = await getAllOrders(query)// getting latest user
                res.status(200).json(Orderss)
            }catch(err){
                res.status(500).json({error:"error getting all Orders"})
            }
        }else{
            res.status(500).json({error:"You are not authorized"})
        }
    }

        /** 
 * Admin functionalities
 * get monthly income
 */
async function HttpGetMonthlyIncome(req,res){
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const prevMonth = new Date(date.setMonth(lastMonth.getMonth() - 1))
  
    try{
       const income = await getMonthlyIncome(prevMonth)
        res.status(200).json(income)
    }catch(err){
        res.status(500).json({error:"Error fetching income"})
    }
    
}
module.exports = {
    HttpCreateOrders,
    HttpUpdateOrders,
    HttpDeleteOrders,
    HttpGetAllOrders,
    HttpGetMonthlyIncome
}
