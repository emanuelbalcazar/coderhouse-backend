'use strict'

// use: node yargs-upload.js upload --file=myFile.txt --bucket=my-s3-bucket
const argv = require('yargs').command('upload', 'upload a file', (yargs) => {}, (argv) => {
    console.log('uploading file now...', argv);
}).argv;
