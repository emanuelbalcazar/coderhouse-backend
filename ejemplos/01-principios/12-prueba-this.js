/**
 * determinar el comportamiento de los console.log y explicar el
 * comportamiento de this en cada llamada
 */
var nombre = "Tom";

const rouco = {
    nombre: 'Rouco',
    especie: 'gato',
    saludar() {
        console.log(`Miauuu hola me llamo ${this.nombre}`);
        console.log(this === rouco);
    }
};

rouco.saludar();  // output?

let saludar = rouco.saludar;

saludar(); // output? que paso aca?
