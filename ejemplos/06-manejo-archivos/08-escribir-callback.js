const fs = require('fs');

fs.writeFile('./archivo.txt', 'Texto en el archivo', (error, contenido) => {
    if (error) {
        console.log('error:', error)
    } else {
        console.log('contenido:', contenido);
    }
});
