const delay = ret => {
    for(let i = 0; i < ret * 3e6; i++);
}

function hacerTarea(num) {
    console.log('haciendo tarea:', num);
    delay(100);
}

console.log('inicio de la tarea');

hacerTarea(1);
hacerTarea(2);
hacerTarea(3);
hacerTarea(4);

console.log('fin de la tarea');
console.log('otras tareas...');
