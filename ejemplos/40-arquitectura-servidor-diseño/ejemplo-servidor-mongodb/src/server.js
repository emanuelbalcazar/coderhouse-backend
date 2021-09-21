const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const logger = require('morgan');
const app = express();
const dotenv = require('dotenv');

// obtengo la config del .env
dotenv.config();

require('./database/connection');

app.use(logger('dev'));
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// protejo el servidor ante cualquier excepcion no atrapada
app.use((err, req, res) => {
    console.error(err.message);
    return res.status(500).send('Algo se rompio!');
});

const usersRouter = require('./routes/users');
const messagesRouter = require('./routes/messages');
app.use('/api', usersRouter);
app.use('/api', messagesRouter);

// obtengo el puerto del enviroment o lo seteo por defecto
const PORT = process.env.PORT || 8080;

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
