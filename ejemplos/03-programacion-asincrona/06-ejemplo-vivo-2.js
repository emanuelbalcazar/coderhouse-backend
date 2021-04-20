function hacerTarea(num, callback) {
    console.log('haciendo tarea', num);
    setTimeout(callback, 100);
}

console.log('inicio de las tareas');

hacerTarea(1, () => {
    hacerTarea(2, () => {
        hacerTarea(3, () => {
            hacerTarea(4, () => {
                console.log('fin de las tareas')
            });
        });
    });
});

console.log('otras tareas...');
