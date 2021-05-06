const fs = require('fs');

fs.readdir('../', (error, contenido) => {
    if (error) {
        console.log('error:', error)
    } else {
        console.log('carpeta leida', contenido);
    }
});
