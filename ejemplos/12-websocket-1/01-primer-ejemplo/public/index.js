// inicializamos la conexion
const socket = io.connect();

// recibo desde el servidor un mensaje
socket.on('mi mensaje', data => {
    alert(data);
    socket.emit('notificacion', 'mensaje recibido exitosamente en el cliente');
});
