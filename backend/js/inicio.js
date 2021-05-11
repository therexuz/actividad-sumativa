"use strict";
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
    var nota = {
        titulo: req.body.titulo,
        estado: req.body.estado,
        texto: req.body.texto
    };
    var data = JSON.stringify(nota);
    fs.writeFile('backend/data/notas.json', data, function (err, result) {
        if (err)
            console.log('error', err);
    });
});
app.listen(port, hostname, function () {
    console.log('SERVIDOR CORRIENDO EN http://localhost:' + port);
});
