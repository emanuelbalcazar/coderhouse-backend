// importamos las librerias
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const TwitterStrategy = require('passport-twitter').Strategy;
const dotenv = require('dotenv');

dotenv.config();

// completar con sus credenciales
const TWITTER_CONSUMER_KEY = process.env.TWITTER_CONSUMER_KEY;
const TWITTER_SECRET = process.env.TWITTER_SECRET;

// creamos la aplicacion
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('trust proxy', 1);

app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

// configuramos passport para usar twitter
passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_SECRET,
    callbackURL: 'http://127.0.0.1:8080/auth/twitter/callback'
}, function (token, tokenSecret, profile, done) {
    console.log(profile);
    let userProfile = profile;
    return done(null, userProfile.id);
}));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

// inicializamos passport
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('Bienvenido al ejemplo de passport con twitter');
});

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback', passport.authenticate('twitter',
    {
        successRedirect: '/',
        failureRedirect: '/faillogin'
    }
));

app.get('/faillogin', (req, res) => {
    res.status(401).send({ error: 'no se pudo autenticar con twitter' })
});

app.get('/datos', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('<h1>datos protegidos</h1>');
    } else {
        res.status(401).send('debe autenticarse primero');
    }
});

const PORT = 8080;
const HOST = '127.0.0.1';

app.listen(PORT, HOST, () => {
    console.log(`Servidor express escuchando en http://${HOST}:${PORT}`)
});
