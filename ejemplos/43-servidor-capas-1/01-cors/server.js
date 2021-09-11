const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
    origin: 'http://localhost:8080',
    optionSuccessStatus: 200,
    methods: "GET, PUT"
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('GET');
});

app.post('/', (req, res) => {
    res.send('POST');
});

app.put('/', (req, res) => {
    res.send('PUT');
});

app.delete('/', (req, res) => {
    res.send('DELETE');
});

// protejo el servidor ante cualquier excepcion no atrapada
app.use((err, req, res, next) => {
    console.error(err.message);
    return res.status(500).send('Algo se rompio!');
});

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
