/**
 * Ejemplo de como se puede reemplazar la persistencia de manera independiente
 * sea un archivo o una base de datos.
 * Ademas se muestra como leer un archivo json que no requiere el uso del modulo FS
 * @author Emanuel Balcazar
 */
const fs = require('fs');
const controller = require('./controllers');
const config = require('./config/config.json');

try {
    // leo la carpeta de archivos
    let files = fs.readdirSync(config.folder);

    // itero en la carpeta y leo por cada archivo el contenido
    files.forEach(async file => {
        let content = fs.readFileSync(`${config.folder}/${file}`);
        // envio a persistir el contenido según como yo lo configure
        controller.store(content.toString(), config.type);
    });
} catch (error) {
    console.log('error:', error);
}
