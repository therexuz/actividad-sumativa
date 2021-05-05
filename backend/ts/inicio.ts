const express = require('express');
const app= express();
const fs=require('fs')
const cors=require('cors')
const hostname ='0.0.0.0'
const port = '3000'

app.use(cors())

app.get('/',(req:any,res:any)=>{
    
    fs.readFile('backend/data/notas.json','utf8',(err:any,data:any)=>{
        if (err){
            console.log(`Error al leer el archivo:'${err}`);
            
        }else{
            const dataNotas=JSON.parse(data)
            res.send(dataNotas)
        }
    })
})

app.listen(port,hostname,()=>{
    console.log('SERVIDOR CORRIENDO EN http://localhost:'+port);
})

