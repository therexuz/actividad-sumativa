const express = require('express');
const bodyParser = require('body-parser')
const app= express();
const fs=require('fs')
const cors=require('cors')
const hostname ='localhost'
const port = '3000'

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded())

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

app.post('/crear-nota',(req:any,res:any)=>{
    let nota={
        titulo:req.body.titulo,
        estado:req.body.estado,
        texto:req.body.texto
    }

    let data = JSON.stringify(nota);

    fs.writeFile('backend/data/notas.json',data, (err,result)=>{
        if(err) console.log('error', err);
    })
})

app.listen(port,hostname,()=>{
    console.log('SERVIDOR CORRIENDO EN http://localhost:'+port);
})

