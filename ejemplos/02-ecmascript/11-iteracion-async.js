/**
 * ejemplo de una iteracion asincronica
 * los iteradores asincronos estan pensados para iterar estructuras de datos asincrona
 */

async function esperar(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(segundos)
        }, segundos * 1000);
    });
}

async function ejecutar() {
    const promesas = [
        esperar(1),
        esperar(1),
        esperar(1)
    ];

    // iteracion normal
    for (const item of promesas) {
        console.log('normal:', item);
    }

    // iteracion asincronica
    for await (const item of promesas) {
        console.log('con async', item);
    }
}

ejecutar().then(res => {
    console.log('se completaron las promesas');
}).catch(error => {
    console.log('ocurrio un error', error);
}).finally(() => {
    console.log('termino!')
});

