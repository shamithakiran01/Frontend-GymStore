const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public'));

app.get('/index.html',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.get('/login.html',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
})

app.get('/register.html',(req,res)=>{
    res.sendFile(__dirname+'/register.html');
})

app.get('/add-to-cart.html',(req,res)=>{
    res.sendFile(__dirname+'/add-to-cart.html');
})
app.get('/email.html',(req,res)=>{
    res.sendFile(__dirname+'/email.html');
})
app.get('/password.html',(req,res)=>{
    res.sendFile(__dirname+'/password.html');
})
app.get('/services.html',(req,res)=>{
    res.sendFile(__dirname+'/services.html');
})
app.get('/privacy.html',(req,res)=>{
    res.sendFile(__dirname+'/privacy.html');
})

app.listen(9080);