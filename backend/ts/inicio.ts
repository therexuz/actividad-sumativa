const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const cors = require('cors');
const hostname = '0.0.0.0';
const port = '3000';
import { Notas } from './notas';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req: any, res: any) => {
  fs.readFile('backend/data/notas.json', 'utf8', (err: any, data: any) => {
    if (err) {
      console.log(`Error al leer el archivo:'${err}`);
    } else {
      const dataNotas: Array<Notas> = JSON.parse(data);
      res.send(dataNotas);
    }
  });
});

app.post('/crear-nota', (req: any, res: any) => {
    
  fs.readFile('backend/data/notas.json', 'utf8', (err: any, data: any) => {
    if (err) {
      console.log(`Error al leer el archivo:'${err}`);
      res.status(500).json({'message':'ERROR EN EL SERVIDOR'})
    } else {
            
      const notas= JSON.parse(data)
      const nuevaNota = req.body;
      const notes:Array<Notas>=notas.notas
      notes.push(nuevaNota)
          
      fs.writeFile('backend/data/notas.json',JSON.stringify({notas:notes}) ,'utf8',(err:any)=>{
        
        if(err){
          return console.log(err)
        }
          console.log("ARCHIVO GUARDADO");

        }
      )
      
      res.status(201).json({'message':'TAREA CREADA CON EXITO'})
    }
  });
});

app.listen(port, hostname, () => {
  console.log('SERVIDOR CORRIENDO EN http://localhost:' + port);
});
