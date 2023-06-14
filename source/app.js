const express=require('express');
const app=express(); 
const path=require('path');
consthbs=require('hbs')
const PORT=process.env.PORT || 3000 

// public static path
//   console.log(path.join(__dirname,"../public"));
const static_path=(path.join(__dirname,"../public"));
app.set('view engine','hbs');
app.use(express.static(static_path));
app.get("/",(req,res)=>{
    res.render('index');
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("*",(req,res)=>{
    res.render('404error');
})
app.listen(PORT,()=>{
    console.log(`Listning to ${PORT}`)
});
