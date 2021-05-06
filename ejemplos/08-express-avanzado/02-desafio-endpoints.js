/**
 * Desafio generico - get endpoints - 10 minutos
 * realizar un servidor express con 3 get endpoints
 */
 const express = require('express');

 // creo una app de tipo express
 const app = express();
 
 const frase = 'Hola mundo como estan';
 const puerto = 8080;
 
 app.get('/', (req, res) => {
     res.send('Bienvenido al desafio express avanzado 1');
 });
 
 app.get('/api/getFrase', (req, res) => {
     
 });
 
 app.get('/api/getLetra/:num', (req, res) => {
     
 });
 
 app.get('/api/getPalabra/:num', (req, res) => {
     
 });
 
 // pongo a escuchar el servidor en el puerto indicado
 const server = app.listen(puerto, () => {
     console.log(`servidor escuchando en http://localhost:${puerto}`);
 });
 
 // en caso de error, avisar
 server.on('error', error => {
     console.log('error en el servidor:', error);
 });
 