import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouters from "../backend/routers/auth.routers.js";
import messageRouters from "./routers/message.routes.js";
import userRoutes from "./routers/user.routes.js"

import connectToMangoDb from "./db/connectToMangoDB.js";
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("Hello world");
// })
app.use(cookieParser());
app.use("/api/auth",authRouters);
app.use("/api/messages",messageRouters);
app.use("/api/users",userRoutes);

app.listen(PORT,()=> {
    connectToMangoDb();
    console.log(`server Running on port  ${PORT}`);
});