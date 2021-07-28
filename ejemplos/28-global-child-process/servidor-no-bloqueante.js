const http = require('http');
const { fork } = require('child_process');

const server = http.createServer();

let visitas = 0;

server.on('request', (req, res) => {
    let { url } = req;

    if (url === '/calcular') {
        const computo = fork('./computo.js');
        computo.send('start');
        computo.on('message', sum => {
            res.end(`la suma es ${sum}`);
        });
    } else {
        res.end(`OK ${++visitas}`);
    }
});

const PORT = 8080;

server.listen(PORT, err => {
    if (err)
        throw new Error(`error: ${err}`);

    console.log(`servidor escuchando en http://localhost:${PORT}`);
});