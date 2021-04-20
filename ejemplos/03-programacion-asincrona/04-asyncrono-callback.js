// importamos la libreria para la lectura del filesystem
const fs = require('fs');

// declaramos la ruta al archivo
const filepath = __dirname + '/archivo.txt';

// leemos el archivo, prestar atencion a la funcion que se esta llamando!
fs.readFile(filepath, (error, data) => {

    // imprimimos su contenido, ahora dentro de la funcion de callback!
    console.log('Archivo:', data.toString());
});

// que sucedio con esto?
console.log('Termino la ejecución? o imprimio antes?');
