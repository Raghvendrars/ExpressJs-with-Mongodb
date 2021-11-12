require('/models/DB');
const express=require('express');
var app=express();
app.listen(3000,()=>{
    console.log("Express Connected")
});