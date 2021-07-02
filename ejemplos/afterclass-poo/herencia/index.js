const Cliente = require('./cliente');
const Profesor = require('./profesor');

const cliente1 = new Cliente('Maria', 'Aldana', 27, 001);
const cliente2 = new Cliente('Jose', 'Perez', 34, 002);

const profesor1 = new Profesor('Emanuel', 'Balcazar', 27, 'Curso Backend')

console.log('cliente 1:', cliente1.getNombre(), cliente1.getApellido(), cliente1.getEdad(), cliente1.getNroCliente());
console.log('cliente 2:', cliente2.getNombre(), cliente2.getApellido(), cliente2.getEdad(), cliente2.getNroCliente());
console.log('profesor 1:', profesor1.getNombre(), profesor1.getApellido(), profesor1.getEdad(), profesor1.getCurso());
