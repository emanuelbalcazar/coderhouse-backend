const fs = require('fs');

fs.appendFile('./archivo.txt', 'Texto a agregar', (error, contenido) => {
    if (error) {
        console.log('error:', error)
    } else {
        console.log('contenido:', contenido);
    }
});
