import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import apiRouters from "./src/Routes/apiRouters.js";
import cors from 'cors'

dotenv.config()
const app = express()
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use("/api",apiRouters)



const mongoDBConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('connected to DB');
    } catch (error) {
        throw error
    }
}
const port = process.env.PORT
app.listen(port, () => {
    mongoDBConnect();
    console.log(`server is running on port http://localhost:${port}`);
})