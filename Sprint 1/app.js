const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const historial = require('./historial');

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // parse URL-encoded data
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/submit-data', (req, res) => {
    console.log("inicio");
    // Procese los datos del formulario aquí
    const data = {
        ...req.body,
        "peso": req.body.peso,
        "altura": req.body.altura,
        "imc": parseFloat(req.body.peso)/(parseFloat(req.body.altura)/100)**2,
    };
    historial.push(data);
    console.log(data);
    
    // res.status(200).send('Datos recibidos');
    res.redirect('/');
});

app.get('/historial', (req, res) => {
    res.json(historial);
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
    console.log('http://localhost:3000')
});