// inicializamos la conexion
const socket = io.connect();

// recibo desde el servidor un mensaje
socket.on('mensaje', data => {
    console.log(data);
    // TODO insertar el dato en el html
});


// TODO obtener el input y emitir el mensaje cuando ocurra el evento de input en el html