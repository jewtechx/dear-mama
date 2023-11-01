const jsonwebtoken = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const dotenv = require("dotenv")
dotenv.config()

const {auth} = require("./auth.mongo")

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
        password:hashedPassword
    })

    const savedUser = await register.save()

    if(savedUser){
        return {
            name:name,
            id:signToken(savedUser._id,isAdmin)
        }
    }

}

//login user
async function loginUser(data){
    const {email,password} = data

    const user = await auth.findOne(
        {email:email}
    )
   
}

const signToken = (id,isAdmin) => {
    return jsonwebtoken.sign({id,isAdmin},process.env.JWT,{
        expiresIn:'30d'
    })
}

//edit user


module.exports = {
    registerUser,loginUser
}
