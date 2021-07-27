const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = 'secret';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usuarios = [];

app.get('/', (req, res) => {
    res.send('Bienvenido al ejemplo de jwt');
});

app.post('/registrar', (req, res) => {
    try {
        let user = req.body;
        user.password = createHash(user.password);
        usuarios.push(user);
        res.send({ token: generateToken(user) });
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/login', (req, res) => {
    let user = usuarios.find(user => user.username === req.body.username);

    if (!user) {
        return res.status(400).send('usuario no encontrado');
    }

    if (!isValidPassword(user, req.body.password)) {
        return res.status(400).send('usuario/contraseña no valido');
    }

    res.send({ token: generateToken(user) });
});

app.get('/datos', checkAuthentication, (req, res) => {
    res.send('<h1>datos protegidos por middleware</h1>');
});

function checkAuthentication(req, res, next) {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(403).send('debe proveer el token');
    }

    jwt.verify(token, secret, (err, value) => {
        if (err) return res.status(500).send('fallo la autenticacion con token');

        req.user = value;
        next();
    });
}

const isValidPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password);
}

function generateToken(user) {
    return jwt.sign({ data: user }, secret, { expiresIn: '10m' });
}

const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor express escuchando en http://localhost:${PORT}`)
});
