/**
 * ejemplo de un servidor http con express
 */

const express = require('express');

// creo una app de tipo express
const app = express();

const puerto = 8080;

// defino la ruta / con GET
app.get('/', (req, res) => {
    console.log('request recibido!');
    res.json({ msg: 'hola mundo!' });
});

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
