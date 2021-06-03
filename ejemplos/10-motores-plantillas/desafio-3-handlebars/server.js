import express from 'express'
import handlebars from 'express-handlebars'

const app = express()

//establecemos la configuración de handlebars
app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
        defaultLayout: 'index.hbs',
    })
);

app.set("view engine", "hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
    //Sirve el cuerpo de la página "main.hbs" en el contenedor "index.hbs"
    res.render("datos", {
        nombre: 'Daniel',
        apellido: 'Sánchez',
        edad: 52,
        email: 'danielsanchez68@hotmail.com ',
        telefono: '1559607538',
        fyh: new Date().toLocaleString()
    });
});

/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
