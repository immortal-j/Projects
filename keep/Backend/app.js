const express =require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/Keep",{useNewUrlParser:true,useUnifiedTopology: true});
const itemsSchema={
    title:String,
    content:String
}
const Item=mongoose.model("Item",itemsSchema);
app.get("/hello",(req,res)=>{
    Item.find({},function(err,results){
        res.status(200).send(results);
       
    })
});

app.post("/hello",(req,res)=>{
    res.sendStatus(200);
    var title=req.body.title;
    var content=req.body.content;
    const item1=new Item({
        title:title,
        content:content
    });
    item1.save();
});

app.post("/delete",(req,res)=>{
    
    Item.findByIdAndRemove(req.body.id,function(err){
        if(err)
        {
            res.send(err);
            console.log(err);
        }
        else{
            res.sendStatus(200);
            console.log("Success");
        }
       });
});

app.listen(8000,()=>{
    console.log("started succesfully");
})