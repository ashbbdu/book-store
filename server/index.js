const express = require("express");
const { connect } = require("./config/database");
const authRoutes = require("./routes/Auth") 
const userRoutes = require("./routes/user") 
const app = express();

const PORT = process.env.PORT || 5000 
require("dotenv").config()
app.use(express.json());

// function to connect the DB
connect();

// Routes
app.use("/api/v1/auth" , authRoutes)
app.use("/api/v1/users" , userRoutes)

app.get("/" , (req , res) => {
    res.send("App is running")
})

app.listen(PORT , () => {
    console.log(`App is running on PORT : ${PORT}`)
})
