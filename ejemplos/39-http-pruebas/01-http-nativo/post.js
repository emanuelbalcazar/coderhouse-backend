const https = require('https');

const data = JSON.stringify({todo: 'comprar pan'})

const options = {
    hostname: 'whatever.com',
    port: 443,
    path: '/todos',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
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

req.write(data);

req.end();