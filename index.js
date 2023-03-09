const express=require('express');
const app=express();
const path=require('path');
const env=require('dotenv');
env.config({path:'config.env'});
app.use('/assets',express.static('assets'));
app.set('views',path.join(__dirname,"./views/"));
app.set('view engine','hbs');
var home=require('./route/home');
var contact=require('./route/contact');
const port=process.env.PORT || 3000;
app.use('/',home);
app.use('/',contact);
app.get('/web_software',(req,res)=>{
	res.render('web_software');
})
app.get('/wall_painting',(req,res)=>{
	res.render('wall_painting');
})
app.get('/hardware_maintainece',(req,res)=>{
	res.render('hardware_maintainece');
})
app.get('/graphic_design',(req,res)=>{
	res.render('graphic_design');
})
app.get('/cctv',(req,res)=>{
	res.render('cctv');
})
app.listen(port);