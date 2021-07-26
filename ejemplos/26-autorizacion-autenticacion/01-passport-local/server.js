// importamos las librerias
const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

const usuarios = [];
let globalId = 0;

passport.use('login', new LocalStrategy({
    passReqToCallback: true
},
    function (req, username, password, done) {
        let usuario = usuarios.find(u => u.username === username);

        if (!usuario) {
            console.log('usuario no encontrado con el nombre:', username);
            return done(null, false, console.log('mensaje', 'usuario no encontrado'));
        } else {
            if (!isValidPassword(usuario, password)) {
                console.log('contraseña invalida');
                return done(null, false, console.log('mensaje', 'contraseña invalida'));
            } else {
                return done(null, usuario);
            }
        }
    })
);

passport.use('signup', new LocalStrategy({
    passReqToCallback: true
}, function (req, username, password, done) {
    findOrCreateUser = function () {
        let usuario = usuarios.find(u => u.username === username);

        if (usuario) {
            console.log('usuario ya existe');
            return done(null, false, console.log('mensaje', 'usuario ya existe'));
        } else {
            let newUser = {
                id: ++globalId,
                username: username,
                password: createHash(password)
            };

            usuarios.push(newUser);
            return done(null, newUser);
        }
    },
    process.nextTick(findOrCreateUser);
})
);

const isValidPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password);
}

const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    let user = usuarios.find(u => u.id == id);
    return done(null, user);
});

// creamos la aplicacion
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// inicializamos passport
app.use(passport.initialize());
app.use(passport.session());

// middleware de autenticacion
function checkAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
        //req.isAuthenticated() will return true if user is logged in
        next();
    } else {
        res.redirect("/login");
    }
}

app.get('/', (req, res) => {
    res.send('Bienvenido al ejemplo de passport');
});

app.post('/login', passport.authenticate('login', { failureRedirect: '/faillogin' }), (req, res) => {
    console.log('login', req.body);
    res.send(req.body);
});

app.get('/faillogin', (req, res) => {
    res.status(400).send({ error: 'usuario o contraseña invalida' });
});

app.post('/signup', passport.authenticate('signup', { failureRedirect: '/failsignup' }), (req, res) => {
    console.log(usuarios);
    res.send(req.body);
});

app.get('/failssignup', (req, res) => {
    res.status(400).send({ error: 'fallo el signup' });
});

app.get('/datos', checkAuthentication, (req, res) => {
    res.send('<h1>datos protegidos por middleware</h1>');
});

app.delete('/logout', (req, res) => {
    req.logout();
    res.send({ logout: 'ok' });
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor express escuchando en http://localhost:${PORT}`)
});