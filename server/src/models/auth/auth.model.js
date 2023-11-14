const jsonwebtoken = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const dotenv = require("dotenv")
dotenv.config()

const {Auth} = require("./auth.schema")

// get all users 
async function getAllUsers(bool){
    if(bool){
        const users = await Auth.find().sort({_id:-1}).limit(1)
        return users
    }else{
        const users = await Auth.find().exec()
        return users
    }
}

//get user stats
async function getUserStats(lastyear){
    const data = await Auth.aggregate([
        {$match : {createdAt : {$gte:lastyear}}},
        {
            $project: {
                month : {$month : "$createdAt"}
            }
        },
        {
            $group:{
                _id:"$month",
                total:{$sum:1}
            }
        }
    ])
    return data
}

//register user
async function registerUser(data){
    const {name,email,password,isAdmin} = data
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await Auth.findOne({email:email})

    user && res.status(500).json({error:"User already exits"})

    const register = new Auth({
        name:name,
        email:email,
        password:hashedPassword,
        isAdmin:isAdmin ? isAdmin : false
    })

    const savedUser = await register.save()

    if(savedUser){
        return {
            name:name,
            isAdmin:savedUser.isAdmin,
            token:signToken(savedUser._id)
        }
    }

}

//login user
async function loginUser(data){
    const {email,password} = data

    const user = await Auth.findOne(
        {email:email}
    )

    const unhashedPassword = await bcrypt.compare(password,user.password)
   
    if(!user){
        return "user not found"
    }
    if(unhashedPassword){
        return {
            name:user.name,
            token:signToken(user._id)
        }
    }else{
        return "password wrong"
    }
}

const signToken = (id,isAdmin) => {
    return jsonwebtoken.sign({id},process.env.JWT,{
        expiresIn:'30d'
    })
}

//edit user
async function editUser(data,id){
   if(data){
    console.log(data)
    const editedUser = await Auth.findByIdAndUpdate(id,{
        $set:data
    },{new:true})
       return editedUser
   }else throw new Error("missing fields")
}

//delete user
async function deleteUser(id){
        const user = await Auth.findByIdAndDelete(id)
}


module.exports = {
    registerUser,loginUser,
    getAllUsers,
    getUserStats,
    registerUser,
    loginUser,
    editUser,
    deleteUser
}
