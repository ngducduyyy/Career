import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

const app = express()
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT
const DATABASE_NAME = process.env.DATABASE_NAME
mongoose.connect("mongodb://localhost:27017/" + DATABASE_NAME)

app.listen(PORT, ()=>{
    console.log("Server is running on port " + PORT)
})