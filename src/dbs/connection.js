import mongoose from "mongoose";


mongoose.connect("mongodb://127.0.0.1:27017/todoServer")
.then(()=>{
    console.log("connection established to database")
})
