const express = require('express');
const app= express();

const hostname ='127.0.0.1'
const port = '3000'

app.use(express.static('src'))

app.get('/',(req:any,res:any)=>{
    
    let datos=[{
        id:1,
        nombre:"pepito",
        apellidos:"martinez",
        edad:12
    }];
    res.render(datos)
})

app.listen(port,hostname,()=>{
    console.log('SERVIDOR CORRIENDO EN http://localhost:'+port);
})

