const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + 'public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// indica el directorio donde se almacenaran las plantillas
app.set('views', './views');
// se indica el motor de plantillas a utilizar
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('hello.pug', { mensaje: 'Usando Pub JS desde express'});
});

app.get('/urlparams', (req, res) => {
    res.send(req.query);
});

app.post('/urljson', (req, res) => {
    res.send(req.body);
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
