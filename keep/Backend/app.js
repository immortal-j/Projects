const express =require("express");
const bodyParser=require("body-parser");

const app = express();
app.get("/hello",(req,res)=>{
    console.log("request received");
    res.send("hello");
})
app.listen(8000,()=>{
    console.log("started succesfully");
})