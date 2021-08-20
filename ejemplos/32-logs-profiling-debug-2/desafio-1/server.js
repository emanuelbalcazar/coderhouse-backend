const express = require("express");
const app = express();

app.get("/randoms-nodebug", (req, res) => {
    let randoms = [];

    for (let i = 0; i < 10000; i++) {
        let numero = obtenerRandom(0, 9);
        randoms.push(numero);
    }

    res.send({ randoms: randoms });
});

app.get("/randoms-debug", (req, res) => {
    let randoms = [];

    for (let i = 0; i < 10000; i++) {
        let numero = obtenerRandom(0, 9);
        randoms.push(numero);
    }

    console.log(randoms);
    res.send({ randoms: randoms });
});

function obtenerRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const PORT = parseInt(process.argv[2]) || 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

server.on("error", (error) => console.log(`Error en servidor: ${error}`));
