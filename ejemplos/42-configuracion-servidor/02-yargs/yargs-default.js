'use strict'

// use: node yargs-default.js
const argv = require('yargs').command('*', 'the default command handler', () => {}, (argv) => {
    console.log('this function is called by default');
}).argv;
