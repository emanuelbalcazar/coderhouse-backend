/**
 * Desafio generico - operaciones con el servidor - 5 minutos
 * sumar numeros pasados de diferentes maneras en el get e implementar post, put y delete
 */
const express = require('express');

// creo una app de tipo express
const app = express();
const puerto = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Bienvenido al desafio de operaciones');
});

// GET /sumar/5/6
app.get('/api/sumar/:num1/:num2', (req, res) => {

});

// GET /sumar?num1=5&num2=62
app.get('/api/sumar', (req, res) => {

});

// GET /operacion/5+6
app.get('/api/operacion/:operacion', (req, res) => {

});

app.post('/api', (req, res) => {

});

app.put('/api', (req, res) => {

});

app.delete('/api', (req, res) => {

});

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
