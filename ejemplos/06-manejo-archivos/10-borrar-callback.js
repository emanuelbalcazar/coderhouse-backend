const fs = require('fs');

fs.unlink('./archivo.txt', (error) => {
    if (error) {
        console.log('error:', error)
    } else {
        console.log('archivo borrado!');
    }
});
