'use strict'
// use: node yargs.js --name=jacob --age=45
const args = require('yargs').argv;

console.log(args)

console.log('name:', args.name);
console.log('age:', args.age);
