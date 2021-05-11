function crearIterador(arreglo) {
    let siguienteIndice = 0;

    return {
        next: function () {
            return siguienteIndice < arreglo.length ? { value: arreglo[siguienteIndice++], done: false } : { done: true }
        }
    }
}

var iterador = crearIterador(['yo', 'ya']);
console.log(iterador.next().value); // yo
console.log(iterador.next().value); // ya
console.log(iterador.next().value); // true
