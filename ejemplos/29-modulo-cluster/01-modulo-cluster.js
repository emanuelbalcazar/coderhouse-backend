const cluster = require('cluster');
const express = require('express');
const numCPUs = require('os').cpus().length;
const app = express()

// crear los workers
if (cluster.isMaster) {
    console.log(numCPUs)
    console.log(`PID MASTER ${process.pid}`)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork(); // creamos un worker para cada cpu
    }

    // controlamos la salida de los workers
    cluster.on('exit', worker => {
        console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString());
        cluster.fork();
    });

} else {
    const PORT = parseInt(process.argv[2]) || 8080

    app.get('/', (req, res) => {
        res.send(`Servidor express en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
    });

    app.listen(PORT, err => {
        if (!err) console.log(`Servidor express escuchando en http://localhost:${PORT} - PID WORKER ${process.pid}`)
    });
}
