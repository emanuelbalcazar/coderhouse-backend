const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()
app.use(cookieParser())

app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}))

app.get('/', (req, res) => {
    res.send('Servidor express ok!')
})


app.get('/sin-session', (req, res) => {
    let contador = 0;
    res.send({ contador: ++contador })
})

app.get('/con-session', (req, res) => {
    if (req.session.contador) {
        req.session.contador++
        res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`)
    }
    else {
        req.session.contador = 1
        res.send('Bienvenido a su primera visita al sitio!')
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (!err) res.send('Logout ok!')
        else res.send({ status: 'Logout ERROR', body: err })
    })
}) 

app.get('/login', (req, res) => {
    if (!req.query.username || !req.query.password) {
        res.send('login fallo');
    } else if (req.query.username == "admin" || req.query.password == "1234") {
        req.session.user = "admin";
        req.session.admin = true;
        res.send('login correcto!');
    }
});

const auth = (req, res, next) => {
    if (req.session && req.session.user == "admin" && req.session.admin) {
        return next();
    } else {
        return res.status(401).send('No autorizado');
    }
};

app.get('/contenido', auth, (req, res) => {
    res.send('solo un administrador puede ver esta info');
});

app.get('/info', (req, res) => {
    console.log('------------ req.session -------------')
    console.log(req.session)
    console.log('--------------------------------------')

    console.log('----------- req.sessionID ------------')
    console.log(req.sessionID)
    console.log('--------------------------------------')

    console.log('----------- req.cookies ------------')
    console.log(req.cookies)
    console.log('--------------------------------------')

    console.log('---------- req.sessionStore ----------')
    console.log(req.sessionStore)
    console.log('--------------------------------------')

    res.send('Send info ok!')
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor express escuchando en http://localhost:${PORT}`)
})

