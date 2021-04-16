/**
 * ejemplo de la declaracion e instanciacion de una clase
 * incorporadas en ES6
 */
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // propiedad estatica, no pertenece a la instancia
    static contador = 0;

    // propiedades del prototipo Persona, ahora como metodo
    saludo() {
        console.log('Hola!');
    }
}

let juan = new Persona('Juan', 23);

console.log(juan);
console.log(juan.saludo());
console.log(Persona.contador);
