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

// declare all middlewares
const configurePagination = require('./middlewares/configurePagination');
app.use('/api', configurePagination);

// declare all routes with /API
// get index page.
app.get(require('./routes/index'));
app.use('/api', require('./routes/machine'));

// static files.
app.use(express.static(path.join(__dirname, 'public')));

// set host and port.
app.set('host', config.HOST || "localhost");
app.set('port', config.PORT || 8000);

// listening application.
app.listen(app.get('port'), () => {
    console.log('[*] - App Server started in %s:%s', app.get('host'), app.get('port'));
});
