const {registerUser} = require("../../models/auth/auth.model")
const {auth} = require("../../models/auth/auth.mongo")

async function HttpGetMe(req,res){
    res.status(200).json({"message":"welcome to this pharmacy"})
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
        token = registerUser(data)
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
    }
}

//edit
async function HttpEditUser(req,res){

}


module.exports = {
    HttpGetMe,
    HttpRegisterUser,
    HttpLoginUser,
    HttpEditUser
}
