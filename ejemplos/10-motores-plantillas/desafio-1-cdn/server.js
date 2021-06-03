import express from 'express'

const app = express()

app.use(express.static('public'))


/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
