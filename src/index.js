import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js";
dotenv.config({
  path: "./.env",
});
// connect db is a asynchronous function so it returns promis; so usko .then() and . catch se handle kr sakte hai
app.get("./udit" , (req,res)=>{
    res.send("i am server");
})
connectDB()
  .then(() => {
    app.on("error",(error)=>{
        console.log("error in server connecting",error);
    })
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`server is listening on port ${process.env.PORT}`);
    })
    
  })
  .catch((err) => {
    console.log("MONGODB connection err ", err);
  });
/*
import express from express;
const app=express();
(async ()=>{
    try{
     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
     app.on("error",(error)=>{
        console.log("error in connecting");
        throw error;
     })

     app.listen(process.env.PORT ,()=>{
        console.log(`app is listwning on port ${process.env.PORT}`)
     })
    }catch(error){
        console.log("Error is :",error);
        throw error;
    }
})()*/
