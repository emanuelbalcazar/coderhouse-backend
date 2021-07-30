const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

const usuarios = [];

app.get('/', (req, res) => {
    res.send('servidor OK');
});

app.post('/registrar', (req, res) => {
    let usuario = req.body;
    let existe = usuarios.find(u => u.username == usuario.username);
    
    if (existe) {
        return res.status(400).send(`el usuario ${usuario.username} ya fue registrado`);
    }

    usuario.password = bcrypt.hashSync(usuario.password, 8);
    usuarios.push(usuario);
    console.log(usuarios);
    res.send(`el usuario se registro correctamente`);
});

app.post('/login', (req, res) => {
    let { username, password } = req.body;
    let usuario = usuarios.find(u => u.username == username);

    if (!usuario) {
        return res.status(400).send(`el usuario no se encuentra registrado`);
    }

    console.log(bcrypt.compareSync(password, usuario.password));

    if (usuario.username == username && bcrypt.compareSync(password, usuario.password)) {
        req.session.user = username;
        res.send('autenticacion correcta!');
    } else {
        res.status(400).send('usuario o contraseña invalidos');
    }
});

// middleware 
const auth = (req, res, next) => {
    if (req.session && req.session.user) {
        return next();
    } else {
        return res.status(401).send('no autorizado');
    }
};

app.get('/datos', auth, (req, res) => {
    console.log(usuarios);
    res.send(req.session);
});

app.delete('/logout', (req, res) => {
    req.session.destroy();
    res.send('logout exitoso');
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`servidor en http://localhost:${PORT}`);
});
