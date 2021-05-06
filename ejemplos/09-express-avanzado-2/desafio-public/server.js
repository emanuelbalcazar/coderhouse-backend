const express = require('express');

// creo una app de tipo express
const app = express();
const puerto = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// indico donde estan los archivos estaticos
app.use(express.static('public'));

/* ------------------MASCOTAS--------------------------- */

const routerMascotas = express.Router();
const mascotas = [];

// completar...

/* -------------------PERSONAS-------------------------- */
const routerPersonas = express.Router();
const personas = [];

// completar...

// agrego los prefijos
app.use('/mascotas', routerMascotas);
app.use('/personas', routerPersonas);

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
