"use strict";
const express=requirel("express");
const router=express.Router();
//appset
app.get("/",(req,res)=>{

});
app.get("/login",(req,res)=>{
    res.render("home/logind");
});
const home -require("./routes/home");
app.use("/",home);;
app.listen(3000,funtion(){
    console.log("서버가동");
})