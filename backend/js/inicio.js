"use strict";
var express = require('express');
var app = express();
var hostname = '127.0.0.1';
var port = '3000';
app.use(express.static('src'));
app.get('/', function (req, res) {
    var datos = [{
            id: 1,
            nombre: "pepito",
            apellidos: "martinez",
            edad: 12
        }];
    res.render(datos);
});
app.listen(port, hostname, function () {
    console.log('SERVIDOR CORRIENDO EN http://localhost:' + port);
});
