"use strict";
var express = require("express");
var app = express();
var cors = require("cors");
var hostname = '127.0.0.1';
var port = '3000';
app.use(cors());
app.get('/datos', function (req, res) {
    res.send("HOLA MUNDO");
});
app.listen(3000);
