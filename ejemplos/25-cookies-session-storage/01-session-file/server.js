const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// persistencia con el filestore
const FileStore = require('session-file-store')(session);

const app = express()
app.use(cookieParser())
app.use(session({
    store: new FileStore({ path: '../sesiones', ttl: 300, retries: 0 }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

app.get('/', (req, res) => {
    res.send('Servidor express ok!');
});

let contador = 0;

app.get('/sin-session', (req, res) => {
    res.send({ contador: ++contador })
});

app.get('/con-session', (req, res) => {
    if (req.session.contador) {
        req.session.contador++;
        res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`);
    } else {
        req.session.contador = 1;
        res.send('Bienvenido!');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (!err)
            res.send('Logout ok!')
        else
            res.send({ status: 'Logout ERROR', body: err })
    });
});

app.get('/info', (req, res) => {
    console.log('session', req.session)
    console.log('sessionID', req.sessionID)
    console.log('cookies', req.cookies)
    console.log('sessionStore', req.sessionStore)

    res.send('Send info ok!');
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor express con session file escuchando en http://localhost:${PORT}`)
});