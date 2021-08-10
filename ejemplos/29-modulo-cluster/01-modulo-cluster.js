const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const http = require('http');

// crear los workers
if (cluster.isMaster) {
    console.log('num CPUs', numCPUs)
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
    const PORT = 8080;

    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('hello word!');
    }).listen(PORT);

    console.log(`Servidor http escuchando en http://localhost:${PORT}`);
}
