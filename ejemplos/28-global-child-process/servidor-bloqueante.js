const http = require('http');

const calculo = () => {
    let sum = 0;

    for (let i = 0; i < 6e9; i++) {
        sum += 1;
    }

    return sum;
}

let visitas = 0;

const server = http.createServer();

server.on('request', (req, res) => {
    let { url } = req;

    if (url === '/calcular') {
        let sum = calculo();
        res.end(`la suma es ${sum}`);
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