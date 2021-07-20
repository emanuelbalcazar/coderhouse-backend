const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const RedisStore = require('connect-redis')(session)
const redis = require('redis');

// createClient(<puerto>, <host>)
const client = redis.createClient(14899, 'redis-14899.c258.us-east-1-4.ec2.cloud.redislabs.com')

// auth(<contraseña>)
client.auth('MuyY8dyedN5PYpPqJk0H0Zn3VQQY6F2Q', (err) => {
    if (err) throw err;
});

const app = express()
app.use(cookieParser())
app.use(session({
    store: new RedisStore({
        client: client,
        ttl: 300
    }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

app.get('/', (req, res) => {
    res.send('Servidor express ok!')
})

let contador = 0
app.get('/sin-session', (req, res) => {
    res.send({ contador: ++contador })
})

app.get('/con-session', (req, res) => {
    if (req.session.contador) {
        req.session.contador++
        res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`)
    } else {
        req.session.contador = 1
        res.send('Bienvenido!')
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (!err) res.send('Logout ok!')
        else res.send({ status: 'Logout ERROR', body: err })
    })
})

app.get('/info', (req, res) => {
    console.log('session', req.session)
    console.log('sessionID', req.sessionID)
    console.log('cookies', req.cookies)
    console.log('sessionStore', req.sessionStore)

    res.send('Send info ok!');
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor express con redislab escuchando en http://localhost:${PORT}`)
});
