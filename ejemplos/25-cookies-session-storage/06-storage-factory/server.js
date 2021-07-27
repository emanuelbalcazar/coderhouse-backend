const express = require('express');
const cookieParser = require('cookie-parser');
const config = require('./config/config.json');

let storageFactory = require('./storage.factory');
let storageConfig = storageFactory.getStorage(config.STORAGE);

const app = express();
app.use(cookieParser());

app.use(storageConfig.getSession());

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
    console.log(`servidor express escuchando en http://localhost:${PORT}`)
});
