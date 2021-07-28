const { exec } = require('child_process');

exec('ls -lh', (error, stdout, stderr) => {
    if (error) {
        console.log('error', error);
        return;
    }

    if (stderr) {
        console.log('stderr', stderr);
        return;
    }

    console.log('stdout', stdout);
});
