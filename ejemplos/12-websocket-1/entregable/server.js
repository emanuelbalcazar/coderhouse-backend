const express = require('express');
const app = express();
const http = require('http');

const server = http.Server(app);
const io = require('socket.io')(server);

const handlebars = require('express-handlebars');
const Productos = require('./api/productos');

let productos = new Productos();

// establecemos la configuración de handlebars
app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
        defaultLayout: 'index.hbs',
    })
);

app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// definimos las rutas http
const router = express.Router();
app.use('/api', router);

/* -------------------- HTTP endpoints ---------------------- */

// TODO completar con lo realizado en entregas anteriores
router.get('/productos/listar', (req, res) => {

})

router.get('/productos/listar/:id', (req, res) => {
    
})

router.post('/productos/guardar', (req, res) => {
    
})

router.put('/productos/actualizar/:id', (req, res) => {
    
})

router.delete('/productos/borrar/:id', (req, res) => {
    
})

router.get('/productos/vista', (req, res) => {
    let prods = productos.listarAll();

    res.render("vista", {
        productos: prods,
        hayProductos: prods.length
    });
});

/* -------------------- Web Sockets ---------------------- */

io.on('connection', socket => {
    // TODO enviar los productos al cliente que se conectó
    // TODO escuchar el mensaje enviado por el cliente y propagar a todos los conectados
});

/* ------------------------------------------------------- */

const PORT = 8080;

const srv = server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

srv.on("error", error => console.log(`Error en servidor ${error}`))
