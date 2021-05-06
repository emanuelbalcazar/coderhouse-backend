const fs = require('fs');

const data = fs.readFileSync('./archivo.txt', 'utf-8');

console.log(data);
