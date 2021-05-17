"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var cors = require('cors');
var hostname = 'localhost';
var port = '3000';
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded());
app.get('/', function (req, res) {
    fs.readFile('backend/data/notas.json', 'utf8', function (err, data) {
        if (err) {
            console.log("Error al leer el archivo:'" + err);
        }
        else {
            var dataNotas = JSON.parse(data);
            res.send(dataNotas);
        }
    });
});
app.post('/crear-nota', function (req, res) {
    fs.readFile('backend/data/notas.json', 'utf8', function (err, data) {
        if (err) {
            console.log("Error al leer el archivo:'" + err);
        }
        else {
            var nuevaNota = req.body;
            var dataNotas = data;
            dataNotas.notas.push(nuevaNota);
            //let dataNotasJson = JSON.stringify(dataNotas)
            //fs.writeFileSync('backend/data/notas.json',dataNotas)
        }
    });
});
app.listen(port, hostname, function () {
    console.log('SERVIDOR CORRIENDO EN http://localhost:' + port);
});
