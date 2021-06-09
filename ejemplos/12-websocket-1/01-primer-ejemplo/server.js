const express = require('express');
const app = express();
const http = require('http').Server(app);

// le pasamos la constante http a socket.io
const io = require('socket.io')(http);

// indicamos donde se encuentran los archivos estaticos
app.use(express.static(__dirname + '/public'));

// envio a renderizar el html en la raiz de la misma
app.get('/', (req, res) => {
    res.sendFile('index');
});

// cuando se realice la conexion, se ejecutara una sola vez
io.on('connect', socket => {
    console.log('usuario conectado');
    socket.emit('mi mensaje', 'este es mi mensaje desde el servidor');

    // recibo un evento del cliente, con su correspondiente dato
    socket.on('notificacion', data => {
        console.log(data);
    });
});

http.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});



