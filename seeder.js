const mongoose = require("mongoose");
require("colors")
const dotenv = require("dotenv")
const connectDB = require("./config/config")
const Pizza = require("./model/PizaModel");
const Pizzas = require("./data/pizza-data");

// config dot env & mongodb file
dotenv.config();
connectDB();

// import data
const importData = async () =>{
    
    try {

        await Pizza.deleteMany()
        const sampleData = Pizzas.map(pizza =>{ return {...pizza}})
        await Pizza.insertMany(sampleData);
        console.log("Data Imported")
        process.exit()

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

const dataDestroy = () => {}

if(process.argv[2] ==='-d'){
    dataDestroy()
}else{
    importData()
}





