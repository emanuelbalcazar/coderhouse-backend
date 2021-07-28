// proceso hijo
let sum = 0;

process.on('message', msg => {
    console.log(`mensaje del padre ${msg}`);
    for (let i = 0; i < 6e9; i++) {
        sum += 1;
    }

    process.send(sum);
});