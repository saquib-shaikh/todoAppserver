import express from "express";
import productRoute from "./routeshandler/product.js";
import "./dbs/connection.js";

const app=express();
const port=8000;

app.use(express.json())
app.get('/',(req,res)=>{
    res
    .send("Welcome to the Express Server")
    .status(200);
})
app.use("/product",productRoute);


app.listen(port,()=>{
    console.log("server is listening on port 8000")
})

