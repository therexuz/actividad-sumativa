"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var cors = require('cors');
var hostname = '0.0.0.0';
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
            res.status(500).json({ 'message': 'ERROR EN EL SERVIDOR' });
        }
        else {
            var notas = JSON.parse(data);
            var nuevaNota = req.body;
            var notes = notas.notas;
            notes.push(nuevaNota);
            fs.writeFile('backend/data/notas.json', JSON.stringify({ notas: notes }), 'utf8', function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("ARCHIVO GUARDADO");
            });
            res.status(201).json({ 'message': 'TAREA CREADA CON EXITO' });
        }
    });
});
app.listen(port, hostname, function () {
    console.log('SERVIDOR CORRIENDO EN http://localhost:' + port);
});
