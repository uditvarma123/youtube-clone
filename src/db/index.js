import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB= async ()=>{
    try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`MONGODB CONNECTION,${connectionInstance.connection.host}`);
    }catch(err){
        console.log("error",err);
        throw err;
    }
}
export default connectDB;