const fs = require('fs');

try {
    let data = fs.readFileSync('./archivo.txt');
    console.log(data);
} catch (error) {
    console.log('error', error);
}
