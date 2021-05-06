/**
 * Ejemplo de definicion de un motor de plantillas personalizado
 */
const fs = require('fs');
const express = require('express');

const app = express();
const puerto = 8080;

// defino el motor de plantilla
app.engine('ntl', (filepath, options, callback) => {
    fs.readFile(filepath, (err, content) => {
        if (err)
            return callback(err);

        let rendered = content.toString().replace('#title#', '' + options.title + '')
            .replace('#message#', '' + options.message + '');

        return callback(null, rendered);
    });
});

app.set('views', './views'); // especifica el directorio de las vistas
app.set('view engine', 'ntl'); // registra el motor de plantilla

app.get('/', (req, res) => {
    res.render('index', { title: 'Hola', message: 'Mundo!' });
});

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});