
// creating node.js server using express.js
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("hii server")
})
app.get('/home',(req,res)=>{
    res.status(201).json({
        messsage:'user created'
    })
})
app.listen(3000);