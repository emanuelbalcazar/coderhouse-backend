/**
 * ejemplo de uso del this, almacena la instancia del objeto actual.
 * el contexto varia dependiendo de donde se haga uso del this.
 */
function foo(arg1, arg2) {
    console.log(this, arg1, arg2);
}

foo('Hola', 'Mundo');
