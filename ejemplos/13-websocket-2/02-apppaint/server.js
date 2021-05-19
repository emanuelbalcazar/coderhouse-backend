const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const paint = require('./paint');

app.use(express.static('public'));

app.get('/reset', (req, res) => {
    paint.iniMap();
    io.sockets.emit('rectlistdata', paint.mapToArray(paint.rectangleMap));
    res.redirect('/');
})

io.sockets.on('connection', function (socket) {
    var thisClientIP = socket.handshake.address;
    socket.emit('address', thisClientIP);
    socket.emit('rectlistdata', paint.mapToArray(paint.rectangleMap));

    socket.on('info', function (data) {
        console.log(data);
        socket.broadcast.emit('info', data);
    });

    socket.on('refresh', function (data) {
        if (data == 'rectlist') {
            socket.emit('rectlistdata', paint.mapToArray(paint.rectangleMap));
        }
    });

    var Size = 4;

    socket.on('rect', function (data) {
        var c = { r: data.r, g: data.g, b: data.b }
        data.x = (Math.trunc(data.x / Size) * Size);
        data.y = (Math.trunc(data.y / Size) * Size);
        var shape = paint.Shape(data.x, data.y, Size, Size, c.r, c.g, c.b);
        paint.rectangleMap[data.x][data.y] = shape;

        socket.emit('rect', shape);
        socket.broadcast.emit('rect', shape);
    })
});

const PORT = process.env.PORT || 8080;

const server = http.listen(PORT, () => {
    console.log(`Servidor Http con Websockets escuchando en http://localhost:${PORT}`);
});

server.on('error', error => console.log(`Error en servidor ${error}`))
