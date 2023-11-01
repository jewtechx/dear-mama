const {registerUser,loginUser, editUser, deleteUser, getAllUsers, getUserStats} = require("../../models/auth/auth.model")
const {auth} = require("../../models/auth/auth.schema")


//get me
async function HttpGetMe(req,res){
    res.status(200).json(req.user)
}

/**
 * This functionality if for only admin
 * get all users
 */
async function HttpGetAllUsers(req,res){
    console.log(req.user)
    if(req.user.isAdmin){
        const query = req.query.new
        if(query){
            const users = await getAllUsers(true)// getting latest user
            res.status(200).json(users)
        }else{
            const users = await getAllUsers(false)//getting all users
            res.status(200).json(users)
        }
    }else{
        res.status(500).json({error:"You are not authorized"})
    }
}

/**
 * This functionality if for only admin
 * get user stats
 */
async function HttpGetUserStats(req,res){
    if(req.user.isAdmin){
        const date = new Date()
        const lastyear = new Date(date.setFullYear(date.getFullYear() - 1))

        const stats = await getUserStats(lastyear)
        res.status(200).json(stats)
    }else{
        res.status(500).json({error:"You are not permitted to do this"})
    }
}


//register
async function HttpRegisterUser(req,res){
    var token;

    const data = req.body
    
    const {name,email,password} = data

    if(!name || !email || !password){
        res.status(400).json({
            error:"missing required fields"
        })
    }

    if (!auth) {
        res.status(500).json({
            error: "auth object is undefined"
        })
        return;
    }

    if (!auth.findOne) {
        res.status(500).json({
            error: "auth object does not have a findOne method"
        })
        return;
    }

    const user = await auth.findOne({
        email:email
    }).exec();

    if(user){
        res.status(400).json({
            error:"user already exists"
        })
    }else{
        token = await registerUser(data)
        res.status(200).json(token)
    }
}

//login
async function HttpLoginUser(req,res){
    const data = req.body
    
    const {email,password} = data
    
    if(!email || !password){
        res.status(400).json({
            error:"missing required fields"
        })
    }else{
        try{
            let token = await loginUser(data)
            token == "user not found" ? res.status(500).json({error:"user not found"}) : token == "password is wrong" ? res.status(500).json({error:"password is wrong"})  :
            res.status(200).json(token)
        }catch(err){
            res.status(500).json({error:"user not found"})
        }
    }
}

//edit
<<<<<<< HEAD
async function HttpAdmin(req,res){
    if (req.user == req.params.id || req.user.isAdmin){
        
    }
=======
async function HttpEditUser(req,res){
  if(req.params.id == req.user._id){
    try{
        const user = await editUser(req.body,req.user._id)
        console.log(user)
        res.status(200).json({
            message:"user updated"
        })
    }catch(err){
        res.status(500).json({error:"an error occured"})
    }
  }
>>>>>>> refs/remotes/origin/main
}


//delete user
async function HttpDeleteUser(req,res){
    if(req.params.id == req.user._id){
        try{
            await deleteUser(req.user._id)
            res.status(201).json({message:"user deleted successfully"})
        }catch(err){
         res.status(404).json({
            error:"user not found"
         })
       }
}
    }

module.exports = {
    HttpGetMe,
    HttpGetAllUsers,
    HttpGetUserStats,
    HttpRegisterUser,
    HttpLoginUser,
<<<<<<< HEAD
    HttpAdmin
=======
    HttpEditUser,
    HttpDeleteUser
>>>>>>> refs/remotes/origin/main
}
