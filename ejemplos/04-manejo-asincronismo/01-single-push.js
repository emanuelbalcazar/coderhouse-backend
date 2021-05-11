let promesa = new Promise((resolve, reject) => {
    // simulamos un codigo asincrono usando setTimeout
    setTimeout(() => {
        resolve('Exito!');
    }, 500);
});

promesa.then(resultado => {
    // el resultado es lo que sea que le pasemos a resolve(...) de arriba
    console.log('then', resultado);
});
