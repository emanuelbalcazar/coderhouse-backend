// sin llaves: return en una sola linea
const sumar = (a, b) => a + b;

let op1 = 46;
let op2 = 57;

let resultado = sumar(op1, op2);
console.log(`La suma de ${op1} más ${op2} es igual a ${resultado}`);

// con llaves, para multiples instrucciones
const multiplicar = (a, b) => {
    let resultado = a * b;
    return resultado;
};

console.log(`El numero ${op1} multiplicado por ${op2} es igual a ${multiplicar(op1, op2)}`);

// sin parentesis: solo un argumento
const dobleDe = a => a * 2;
console.log(`El doble de ${op1} es ${dobleDe(op1)}`);

// como funcion anonima
const saludar = () => {
    console.log('Hola Mundo');
}

saludar();

const getPersona = () => ({ nombre: 'Emanuel', edad: 26 });
console.log(getPersona());
