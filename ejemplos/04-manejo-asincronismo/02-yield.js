function* generadora() {
    let lista = [3, 7, 5];

    for (let i = 0; i < lista.length; i++) {
        yield lista[i]
    }
}

let numeros = generadora();

console.log(numeros.next());
console.log(numeros.next());
console.log(numeros.next());
console.log(numeros.next());
