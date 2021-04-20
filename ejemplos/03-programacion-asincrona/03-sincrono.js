// importamos la libreria para la lectura del filesystem
const fs = require('fs');

// declaramos la ruta al archivo
const filepath = __dirname + '/archivo.txt';

console.log('antes de leer')

// leemos el archivo, prestar atencion a la funcion que se esta llamando!
let data = fs.readFileSync(filepath);

// imprimimos su contenido, facil!
console.log('Archivo:', data.toString());
