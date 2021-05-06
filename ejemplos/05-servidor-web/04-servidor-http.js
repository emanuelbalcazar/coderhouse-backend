const http = require('http');

const server = http.createServer((peticion, respuesta) => {
    respuesta.end('Hola');
});

server.listen(3000, function () {
    console.log(`servidor esta escuchando en el puerto ${this.address().port}`);
});
