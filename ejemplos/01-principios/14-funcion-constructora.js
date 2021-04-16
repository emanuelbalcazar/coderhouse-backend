/**
 * ejemplo de una funcion constructora y como se crea una instancia
 */
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// propiedades del prototipo Persona
Persona.prototype.saludo = function () {
    console.log('Hola!');
}

// propiedades estaticas de la Persona, no pertenecen a la instancia
Persona.contador = 0;

// creo una instancia de persona llamada juan
let juan = new Persona('Juan', 23);

// imprimo para ver sus atributos
console.log(juan);

