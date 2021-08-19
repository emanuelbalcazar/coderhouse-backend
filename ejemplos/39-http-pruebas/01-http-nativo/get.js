const https = require('https');

const options = {
    hostname: 'eternagame.wikia.com',
    path: '/wiki/EteRNA_Dictionary',
    method: 'GET'
}

const req = https.request(options, res => {
    console.log(`statusCode ${res.statusCode}`);

    res.on('data', data => {
        process.stdout.write(data);
    });
});

req.on('error', error => {
    console.error(error);
});

req.end();