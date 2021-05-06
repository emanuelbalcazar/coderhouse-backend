const express = require('express');

// creo una app de tipo express
const app = express();
const puerto = 8080;
// incorporo el router
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('tiempo:', new Date().toLocaleString());
    next();
});

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send('Algo se rompio!');
});

router.get('/', (req, res) => {
    // throw new Error('error critico');
    res.send('get recibido!');
});

// que pasa si uso app.use('/api', router); ?
app.use(router);

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
