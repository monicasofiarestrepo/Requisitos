const path = require('path');
const expressEdge = require('express-edge');
const express = require('express');

const app = new express();

app.use(express.static('public'));
app.use(expressEdge);
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './main.html'));

});

app.get('/Registro', (req, res) => {
   res.sendFile(path.resolve(__dirname, './assets/pages/registro.html'));
});
