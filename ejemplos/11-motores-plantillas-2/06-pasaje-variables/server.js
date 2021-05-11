const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let mascotas = [
        {
            nombre: 'Sammy', organizacion: 'DigitalOcean', nacimiento: 2012
        },
        {
            nombre: 'Tux', organizacion: 'Linux', nacimiento: 1996
        },
        {
            nombre: 'Moby Dock', organizacion: 'Docker', nacimiento: 2013
        }
    ];

    let mensaje = 'Probando pasaje de parametros en los template EJS desde ExpressJS';

    res.render('index', { mascotas: mascotas, mensaje: mensaje });
});

const puerto = 8080;

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});