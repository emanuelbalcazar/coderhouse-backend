const express = require('express');

// creo una app de tipo express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// indico donde estan los archivos estaticos
app.use(express.static('public'));

app.set('view engine', 'ejs');

const router = require('./routes/router');
app.use(router);

const puerto = 8080;

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
