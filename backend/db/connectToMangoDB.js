import mongoose from "mongoose";
const connectToMangoDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to Mangodb");

    }catch(error){
        console.log("Error connecting to MongoDb",error.message);
    }
};
export  default connectToMangoDb;