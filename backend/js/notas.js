"use strict";
var noteRoutes = function (app, fs) {
    var dataPath = './data/notas.json';
    app.get('/', function (req, res) {
        fs.readFile(dataPath, 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
};
module.exports = noteRoutes;
