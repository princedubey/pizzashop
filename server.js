const express = require('express')
require("colors")
const morgan = require("morgan")
const dotenv = require("dotenv")
const connectDB = require("./config/config")

const app = express()
// 
dotenv.config();

connectDB();

const port = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use(morgan("dev"))

// routing
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use('/api/orders', require("./routes/orderRoute"))
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))