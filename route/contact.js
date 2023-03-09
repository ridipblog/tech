const express=require('express');
const app=express();
const router=express.Router();
const path=require('path');
const bodyParser=require('body-parser');
const encoded=bodyParser.urlencoded({extended:true});
const env=require('dotenv');
const fs=require('fs');
app.set('view engine','hbs');
app.get('/contact',(req,res)=>{
	res.render('contact',{
		style1:[
			"none",
			"red",
			"Error Message"
		]
	});
})
app.post('/contact',encoded,async(req,res)=>{
	res.render('contact',{
		style1:[
			"flex",
			"red",
			"Not Connected"
		]
	});
})
module.exports=app;