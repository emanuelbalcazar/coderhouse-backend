// determinar la salida de este ejemplo
Promise.resolve(10)
    .then(x => x + 1)
    .then(x => x * 2)
    .then(x => {
        if (x == 22)
            throw 'Error';
        else
            return 80;
    })
    .then(x => 30)
    .then(x => x / 2)
    .then(console.log)
    .catch(console.log)
