const express=require('express');
const app=express();
const router=express.Router();
const path=require('path');
const fs=require('fs');
app.set('view engine','hbs');
app.get('/',(req,res)=>{
	res.render('index');
})
module.exports=app;