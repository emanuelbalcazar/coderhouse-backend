/**
 * ejemplo de funciones callback
 */
const formatearFecha = f => `${f.getDate()}-${f.getMonth() + 1}-${f.getFullYear()}`;

const escribirArchivo = (ruta, datos, callback) => {
    let fecha = formatearFecha(new Date());
    callback(false, fecha, 'escritura exitosa');
}

const log = (error, fecha, mensaje) => console.log(`${fecha}: ${mensaje}`);

escribirArchivo('/ruta/al/archivo', 'datos', log);

escribirArchivo('/ruta/al/archivo', 'datos', (error, fecha, mensaje) => {
    console.log(`por callback: ${fecha} - ${mensaje}`);
});
