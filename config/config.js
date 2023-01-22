const mongoose = require("mongoose")
require("colors")

const connectDB = async () =>{

    try {
        const URL = process.env.MONGO_URI;
        const conn = await mongoose.connect(URL)
        console.log(`DataBase Connected: ${conn.connection.host}`.bgBlue.white);
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB