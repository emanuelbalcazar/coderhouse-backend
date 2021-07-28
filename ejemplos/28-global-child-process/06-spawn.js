const { spawn } = require('child_process');
const child = spawn('find', ['.']);

child.stdout.on('data', data => {
    console.log('stdout', data.toString());
});

child.stderr.on('data', data => {
    console.log('stderr', data.toString());
});

child.on('error', error => {
    console.log('error', error.message);
});

child.on('close', code => {
    console.log('child process exited with code', code);
});
