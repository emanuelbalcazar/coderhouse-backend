/**
 * cuales son las salidas de los console.log? porque ocurren esos valores?
 */
var a = 10;

(function () {
    var a = 20;
    console.log('paso 1:', a); // output?

    if (true) {
        var a = 30;
        a = 40;
        console.log('paso 2:', a); // output?
    }

    console.log('paso 3:', a); // output?
})()

console.log('paso 4:', a); // output?
