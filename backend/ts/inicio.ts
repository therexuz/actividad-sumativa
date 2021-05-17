const express = require('express');
const bodyParser = require('body-parser')
const app= express();
const fs=require('fs')
const cors=require('cors')
const hostname ='localhost'
const port = '3000'
import {Notas} from './notas'

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
            const dataNotas:Array <Notas> = JSON.parse(data)
            
            res.send(dataNotas)
        }
    })
})

app.post('/crear-nota',(req:any,res:any)=>{
    let actualizarNotas: Array<Notas> = []

    fs.readFile('backend/data/notas.json','utf8',(err:any,data:any)=>{
        if(err)console.log(`Error al leer el archivo:'${err}`);
        actualizarNotas = JSON.parse(data)
        const crearNota = actualizarNotas

        /* notas.push(req.body)
        console.log(notas);
        
        fs.writeFile('backend/data/notas.json',data, (err:any,result:any)=>{
            if(err) console.log('error', err);
            
        })*/
    })
    
})

app.listen(port,hostname,()=>{
    console.log('SERVIDOR CORRIENDO EN http://localhost:'+port);
})

