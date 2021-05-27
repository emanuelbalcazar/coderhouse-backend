import express from 'express';
import { Persona } from './lib/classes';
const operaciones = require('./lib/functions.js');

const persona: Persona = new Persona('Coder', 'House');

const app = express();

app.get('/', (req, res) => {
    res.send({timeES6: operaciones.getTime(), fullnameTS: persona.getFullName()});
});

const PUERTO: number = 8080;

app.listen(PUERTO, () => {
    console.log(`Servidor express typescript escuchando en http://localhost:${PUERTO}`);
});