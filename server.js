const express = require('express');
const books = require('./books.json')
const PORT = 8000;

let app = express();

// sending a file   
app.get("/home",(req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

// sending a text   
app.get("/",(req,res)=>{
    res.send(`hello`)
})

// sending a json file
app.get("/books",(req,res)=>{
    res.json(books)
})

app.listen(PORT,()=>{
    console.log(`listening at port : ${PORT}`)
})