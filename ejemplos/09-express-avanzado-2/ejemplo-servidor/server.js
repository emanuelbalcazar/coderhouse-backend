const express = require('express');

// creo una app de tipo express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware - intercepto el request y verifico los parametros antes de continuar
const middleware = (req, res, next) => {
    if (isNaN(req.query.num1) || isNaN(req.query.num2))
        return res.status(400).send('Debe ingresar valores numericos');

    next();
};

// protejo el servidor ante cualquier excepcion no atrapada
app.use((err, req, res, next) => {
    console.error(err.message);
    return res.status(500).send('Algo se rompio!');
});

app.get('/', (req, res) => {
    res.send('Bienvenido al servidor express');
});

// importo las rutas y las uso con el prefijo /api
const router = require('./routes/operaciones');
app.use('/api', middleware);
app.use('/api', router);

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

module.exports = server;