let socket = io.connect();

// si llegan mensajes, los renderizo
socket.on('messages', data => {
    render(data);
});

// renderiza el html con los mensajes recibidos
function render(data) {
    var html = data.map((elem, index) => {
        return (`<div>
            <strong>${elem.author}</strong>
            <em>${elem.text}</em>
            </div>
        `);
    }).join(" ");

    // inyecta el html en el elemento con id messages
    document.getElementById("messages").innerHTML = html;
}

// crea un mensaje y lo emite para ser enviado al servidor
function addMessage(e) {
    var mensaje = {
        author: document.getElementById('username').value,
        text: document.getElementById('texto').value
    };

    socket.emit('new-message', mensaje);
    document.getElementById('texto').value = '';
    document.getElementById('texto').focus();

    return false;
}