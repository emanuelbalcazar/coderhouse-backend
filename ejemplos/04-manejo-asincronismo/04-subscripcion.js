/**
 * ejemplo de una subscripcion con rxjs
 * utilizo el require de nodejs para evitar problemas de ejecucion
 */
const rxjs = require('rxjs');

// interval nos devuelve un observable
const observable = rxjs.interval(1000);

// subscribimos un subscriptor al observable, cada vez que el observable emita
// un evento, el subscriptor ejecuta la funcion que se le haya pasado
const subscripcion = observable.subscribe(x => console.log(x));

// podemos hacer que el subscriptor se desubscriba del observable
// subscripcion.unsubscribe()