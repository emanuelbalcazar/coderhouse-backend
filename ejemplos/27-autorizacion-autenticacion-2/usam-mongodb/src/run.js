// run.js - configure and start the application.
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const config = require('./config/configuration');

const conection = require('./database/connector');

// create our app with express.
const app = express();

// configure all environments.
app.use(compression());
app.use(helmet());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

const configurePagination = require('./app/middlewares/configurePagination');
app.use('/api', configurePagination);

// get all PUBLIC routes.
const api = require('require-all')({
    dirname: path.join(__dirname, 'routes'),
    map: (name, path) => {
        app.use('/api', require(path));
    }
});

// ante excepción no atrapada, evitamos caída del sistema y notificamos
process.on('uncaughtException', function (err) {
    console.log('Excepcion no atrapada: ', err);
});

// set host and port.
app.set('host', config.HOST || "localhost");
app.set('port', config.PORT || 8004);

// listening application.
app.listen(app.get('port'), () => {
    console.log('[*] - Usam Mongodb Module started in %s:%s', app.get('host'), app.get('port'));
});
