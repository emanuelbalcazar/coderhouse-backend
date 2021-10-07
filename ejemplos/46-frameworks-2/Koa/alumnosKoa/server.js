// app.js
const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

// Set up body parsing middleware
app.use(koaBody());

// Require the Router we defined in alumnos.js
let alumnos = require('./alumnos.js');

// Use the Router on the sub route /alumnos
app.use(alumnos.routes());

// Server listen
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor Koa escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log('Error en Servidor Koa:',error))
