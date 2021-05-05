const express = require("express");
const app = express();
const cors = require("cors")
const hostname = '127.0.0.1';
const port = '3000';

app.use(cors())

app.get('/datos',(req:any,res:any)=>{
    res.send("HOLA MUNDO")
})

app.listen(3000)

