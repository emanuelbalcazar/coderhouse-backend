const express = require('express');
const multer = require('multer');

// creo una app de tipo express
const app = express();
const puerto = 8080;

// incorporo el router
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


/* Multer config */
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log(file);
        callback(null, 'uploads')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage: storage })


router.get('/', (req, res) => {
    res.sendFile('index');
});

router.post('/subir', upload.single('miArchivo'), (req, res, next) => {
    const file = req.file

    if (!file) {
        const error = new Error('Error subiendo archivo')
        error.httpStatusCode = 400
        return next(error)
    }

    res.send(`Archivo <b>${file.originalname}</b> subido exitosamente`)
});

app.use(router);

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
