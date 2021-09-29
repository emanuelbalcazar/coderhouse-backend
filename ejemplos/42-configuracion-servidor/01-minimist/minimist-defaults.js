'use strict'

const minimist = require('minimist');

let args = minimist(process.argv.slice(2));

console.log('args:', args);
