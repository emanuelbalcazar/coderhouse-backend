const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

const PORT = parseInt(process.argv[2]) || 8080

app.get('/saludo', (req, res) => {
    const mensaje = 'Hola que tal';
    res.send(mensaje);
});

app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el http://localhost:${PORT}`)
});
