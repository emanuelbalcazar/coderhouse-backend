const express = require('express')
const cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Servidor express ok!')
})

app.get('/set', (req, res) => {
    res.cookie('server', 'express').send('Cookie Set')
})

app.get('/setEX', (req, res) => {
    res.cookie('server2', 'express2', { maxAge: 30000 }).send('Cookie SetEX')
})

app.get('/get', (req, res) => {
    res.send(req.cookies)
})

app.get('/clr', (req, res) => {
    res.clearCookie('server').send('Cookie Clear')
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`servidor express escuchando en http://localhost:${PORT}`)
})


