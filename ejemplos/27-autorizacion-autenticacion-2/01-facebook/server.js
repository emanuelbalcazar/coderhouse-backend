// importamos las librerias
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const FacebookStrategy = require('passport-facebook').Strategy;
const dotenv = require('dotenv');

dotenv.config();

// completar con sus credenciales
const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID;
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET;

// creamos la aplicacion
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}));

// configuramos passport para usar facebook
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'photos', 'emails'],
    scope: ['email']
}, function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    let userProfile = profile;
    return done(null, userProfile);
}));

// inicializamos passport
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('Bienvenido al ejemplo de passport con facebook');
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook',
    {
        successRedirect: '/',
        failureRedirect: '/faillogin'
    }
));

app.get('/faillogin', (req, res) => {
    res.status(401).send({ error: 'no se pudo autenticar con facebook' })
});

app.get('/datos', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('<h1>datos protegidos</h1>');
    } else {
        res.status(401).send('debe autenticarse primero');
    }
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor express escuchando en http://localhost:${PORT}`)
});