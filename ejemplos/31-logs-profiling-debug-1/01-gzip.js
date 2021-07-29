const express = require('express');
const compression = require('compression');

const app = express();
app.use(compression());

const PORT = parseInt(process.argv[2]) || 8080

app.get('/saludo', (req, res) => {
    const mensaje = 'Hola que tal';
    res.send(mensaje.repeat(1000));
});

app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el http://localhost:${PORT}`)
});

