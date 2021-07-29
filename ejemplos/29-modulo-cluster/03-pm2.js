//tasklist /fi "imagename eq node.exe" -> lista todos los procesos de node.js activos
//taskkill /pid numpid /f -> mata un proceso por su número de PID

//npm i -g pm2
//npm list -g | grep pm2

// -------------- MODO FORK -------------------
//pm2 start server.js --name="ServerX" --watch -- PORT
//pm2 start server.js --name="Server1" --watch -- 8081
//pm2 start server.js --name="Server2" --watch -- 8082

// -------------- MODO CLUSTER -------------------
//pm2 start server.js --name="ServerX" --watch -i max -- PORT
//pm2 start server.js --name="Server3" --watch -i max -- 8083
//pm2 start server.js --name="Server4" --watch -i max -- 8084

//pm2 list
//pm2 delete id/name
//pm2 desc name
//pm2 monit
//pm2 --help
//pm2 logs
//pm2 flush

const express = require('express');
const app = express();

const PORT = parseInt(process.argv[2]) || 8080;

app.get('/', (req, res) => {
    console.log(`port: ${PORT} -> Fyh: ${Date.now()}`);
    res.send(`Servidor express <span style="color:blueviolet;">(PM2)</span> en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
});

app.listen(PORT, err => {
    if (!err) console.log(`Servidor express escuchando en http://localhost:${PORT} - PID WORKER ${process.pid}`)
});
