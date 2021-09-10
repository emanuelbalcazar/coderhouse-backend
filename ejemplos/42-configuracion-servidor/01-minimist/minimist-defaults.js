'use strict'

const minimist = require('minimist');

let args = minimist(process.argv.slice(2), {
    default: {
        port: 8080
    }
});

console.log('args:', args);
