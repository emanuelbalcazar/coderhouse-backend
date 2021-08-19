const express = require('express');

const app = express();

const PORT = parseInt(process.argv[2]) || 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Bienvenido al servidor express')
});

app.get('/query', (req, res) => {
    res.send(req.query);
});

app.get('/params/:id', (req, res) => {
    res.send(req.params);
});

app.post('/post', (req, res) => {
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el http://localhost:${PORT}`)
});
