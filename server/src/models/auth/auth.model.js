const jsonwebtoken = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const dotenv = require("dotenv")
dotenv.config()

const {auth} = require("./auth.mongo")

//register user
async function registerUser(data){
    const {name,email,password} = data
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const register = new auth({
        name:name,
        email:email,
        password:hashedPassword
    })

    const savedUser = await register.save()

    if(savedUser){
        return {
            name:name,
            id:signToken(savedUser._id)
        }
    }

}

//login user
async function loginUser(data){
    const {email,password} = data

   
}

const signToken = (id) => {
    return jsonwebtoken.sign({id},process.env.JWT,{
        expiresIn:'30d'
    })
}
module.exports = {
    registerUser
}
