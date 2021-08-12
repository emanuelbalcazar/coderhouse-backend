// -------------- ARTILLERY (TEST DE CARGA) -------------------
//https://medium.com/the-andela-way/scaling-out-with-node-clusters-1dca4a39a2a
//npm i -g artillery
//npm list -g | grep artillery

//Setear el servidor en modo fork
//node server.js 8081 FORK
//artillery quick --count 50 -n 40 http://localhost:8081?max=100000 > result_fork.txt

//Setear el servidor en modo cluster
//node server.js 8081 CLUSTER
//artillery quick --count 50 -n 40 http://localhost:8081?max=100000 > result_cluster.txt

import express from 'express'
import cluster from 'cluster'
import * as os from 'os'
import { isPrime } from './is-prime.js'

const modoCluster = process.argv[3] == 'CLUSTER'

/* --------------------------------------------------------------------------- */
/* MASTER */
if (modoCluster && cluster.isMaster) {
    const numCPUs = os.cpus().length

    console.log(`Número de procesadores: ${numCPUs}`)
    console.log(`PID MASTER ${process.pid}`)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString())
        cluster.fork()
    })
}
else {
    const app = express()

    app.get('/', (req, res) => {
        const primes = []
        const max = Number(req.query.max) || 1000
        for (let i = 1; i <= max; i++) {
            if (isPrime(i)) primes.push(i)
        }
        res.json(primes)
    })

    const PORT = parseInt(process.argv[2]) || 8080;

    app.listen(PORT, err => {
        if (!err) console.log(`Servidor express escuchando en http://localhost:${PORT} - PID WORKER ${process.pid}`)
    })
}
