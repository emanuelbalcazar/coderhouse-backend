'use strict'

const minimist = require('minimist');

let args = minimist(process.argv.slice(2), {
    alias: {
        h: 'help',
        v: 'version'
    }
});

console.log('args:', args);