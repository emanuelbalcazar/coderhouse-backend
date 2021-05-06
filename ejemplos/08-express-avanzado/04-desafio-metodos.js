/**
 * Desafio generico - servidor con get, post, put y delete
 */
const express = require('express');

// creo una app de tipo express
const app = express();
const puerto = 8080;
let frase = 'Frase inicial';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Bienvenido al desafio de metodos en el servidor');
});

// listar la frase completa
app.get('/api/leer', (req, res) => {

});

// listar una palabra por su posicion (la primera palabra tiene posicion 1)
app.get('/api/leer/:pos', (req, res) => {

});

// incorporar una palabra al final
app.post('/api/guardar', (req, res) => {

});

// actualizar una palabra por su posicion, {palabra: <palabra>}
app.put('/api/actualizar/:pos', (req, res) => {

});

// borrar una palabra por su posicion
app.delete('/api/borrar/:pos', (req, res) => {

});

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
