const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const historial = require('./historial');

const app = express();

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse URL-encoded data
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/assets/pages/main.html'));
});

app.get('/calculadora', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/assets/pages/calculadora.html'));
});

app.post('/submit-data', (req, res) => {
    console.log("inicio");
    // Procese los datos del formulario aquí
    const data = {
        "peso": req.body.peso,
        "altura": req.body.altura,
        "imc": req.body.imc,
    };
    console.log(req.body);
    historial.push(data);
    res.status(200).json({message: 'Datos recibidos correctamente'});
});

app.get('/historial', (req, res) => {
    res.json(historial);
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
    console.log('http://localhost:3000')
});