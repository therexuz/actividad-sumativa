const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const cors = require('cors');
const hostname = 'localhost';
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
        } else {
            const nuevaNota:Notas = req.body;
            const dataNotas= <Array<Notas>>data;
            dataNotas.notas.push(nuevaNota)

           //let dataNotasJson = JSON.stringify(dataNotas)
        
            //fs.writeFileSync('backend/data/notas.json',dataNotas)
        }
    });
});

app.listen(port, hostname, () => {
  console.log('SERVIDOR CORRIENDO EN http://localhost:' + port);
});
