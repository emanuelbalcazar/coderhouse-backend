// importamos la libreria para la lectura del filesystem
const fs = require('fs');

// declaramos la ruta al archivo
const filepath = __dirname + '/archivo.txt';

// hacemos nuestra propia funcion con promesas
function readFilePromise(filepath) {

    const promise = new Promise((resolve, reject) => {
        fs.readFile(filepath, (err, data) => {
            if (err)
                return reject(err);

            return resolve(data.toString());
        });
    });

    return promise;
}

// llamamos a la funcion que nos devuelve la promesa (no el resultado)
let promise = readFilePromise(filepath);

// ejecutamos la promesa, prestar atencion a los then, catch
promise.then((result) => {
    console.log('then:', result);
}, (error) => {
    console.error('error:', error);
});

// otra forma...
promise.then(console.log);