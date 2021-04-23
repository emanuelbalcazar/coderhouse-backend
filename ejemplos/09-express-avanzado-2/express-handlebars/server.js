const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

const puerto = 8080;

const data = [
    { name: 'Katarina', lane: 'midlaner' },
    { name: 'Jayce', lane: 'toplaner' },
    { name: 'Heimerdinger', lane: 'toplaner' },
    { name: 'Jayce', lane: 'midlaner' },
    { name: 'Azir', lane: 'midlaner' }
]

// configuracion de handlebars en express
app.engine('hbs', handlebars({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials/'
}));

// seteo el motor de plantilla
app.set('view engine', 'hbs');

app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('main', { suggestedChamps: data, listExists: true });
});

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});