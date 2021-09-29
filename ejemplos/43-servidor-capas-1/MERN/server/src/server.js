
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const logger = require('morgan');
const chalk = require('chalk');
const config = require('./config/config');
const cors = require('cors');

// load .env configuration
require('dotenv').config();

const success = chalk.green;
const error = chalk.red;

// create our app with express.
const app = express();

// configure all environments.
app.use(logger('dev'));
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
    origin: process.env.ORIGIN,
    optionSuccessStatus: 200,
    methods: "GET, PUT, POST, DELETE"
}

app.use(cors(corsOptions));

// static files
app.use(express.static('public'));

// import all routes
const index = require('./routes/index');
app.use(index);

const articleRouter = require('./routes/articles');
app.use('/api', articleRouter);

// catch all errors.
app.use(function (err, req, res) {
    console.log(error(err.stack));
    res.status(500).json({ code: 500, message: err.message });
});

// catch unhandled rejection from promises.
process.on('unhandledRejection', function (err) {
    console.log(error(err.stack));
});

// set host and port.
app.set('host', config.HOST);
app.set('port', config.PORT);

// listening application.
app.listen(app.get('port'), async () => {
    console.log(success(`[server] - started in ${app.get('host')}:${app.get('port')} in ${config.ENV}`));
});
