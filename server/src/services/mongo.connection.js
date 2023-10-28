const mongoose = require("mongoose")

const MONGO_URI = "mongodb+srv://jwlarbi15:dearmama@cluster0.imu4ux7.mongodb.net/dearmama";

mongoose.connection.once("open", () => {
    console.log("Database connected successfully. Ready for work!")
})

mongoose.connection.on("error", () => {
    console.log("Error connecting database");
})

async function mongoConnect(){
    await mongoose.connect(MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}

async function mongoDisconnect(){
    await mongoose.disconnect()
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}