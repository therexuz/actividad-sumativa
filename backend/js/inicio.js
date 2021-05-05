"use strict";
var express = require('express');
var app = express();
var fs = require('fs');
var cors = require('cors');
var hostname = '0.0.0.0';
var port = '3000';
app.use(cors());
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
app.listen(port, hostname, function () {
    console.log('SERVIDOR CORRIENDO EN http://localhost:' + port);
});
