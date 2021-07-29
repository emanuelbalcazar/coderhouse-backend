//tasklist /fi "imagename eq node.exe" -> lista todos los procesos de node.js activos
//taskkill /pid numpid /f -> mata un proceso por su número de PID

//npm i -g pm2
//npm list -g | grep pm2

// -------------- MODO FORK -------------------
//pm2 start server.js --name="Server1" --watch -- 8081

// -------------- MODO CLUSTER -------------------
//pm2 start server.js --name="Server2" --watch -i max -- 8082

//pm2 list
//pm2 delete id/name
//pm2 desc name
//pm2 monit
//pm2 --help
//pm2 logs
//pm2 flush

// ------------------ NGINX ----------------------
//http://nginx.org/en/docs/windows.html
//start nginx
//tasklist /fi "imagename eq nginx.exe"
//nginx -s reload
//nginx -s quit


const express = require('express')

const app = express()

//app.use(express.static('public'))

//console.log(parseInt(process.argv[2]))
const PORT = parseInt(process.argv[2]) || 8080

app.get('/datos', (req, res) => {
    console.log(`port: ${PORT} -> Fyh: ${Date.now()}`)
    res.send(`Servidor express <span style="color:blueviolet;">(Nginx)</span> en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
})

app.listen(PORT, err => {
    if (!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
})
