/**
 * ejemplo de una subscripcion con rxjs
 * utilizo el require de nodejs para evitar problemas de ejecucion
 */
const rxjs = require('rxjs');

const observable = rxjs.interval(1000);
const subscripcion = observable.subscribe(x => console.log(x));
