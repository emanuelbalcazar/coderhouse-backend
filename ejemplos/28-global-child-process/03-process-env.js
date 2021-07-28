console.log('argv:', process.env);
console.log('execPath:', process.execPath);

console.log = function(d) {
    process.stdout.write(d + '\n');
};

console.log('mensaje 1');
console.log('mensaje 2');
