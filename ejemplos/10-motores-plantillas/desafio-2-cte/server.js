import express from 'express'
import fs from 'fs'

const app = express()

app.engine('cte', (filePath, options, cb) => { // define the template engine
  fs.readFile(filePath, function (err, content) {
    if (err) return cb(new Error(err));
    // this is an extremely simple template engine
    var rendered = content.toString()
    for(let key in options) {
        if(typeof options[key] == 'string' || typeof options[key] == 'number' ) {
            //console.log(key, options[key])
            rendered = rendered.replace(`^^${key}$$`, `${options[key]}`)
        }
    }
    return cb(null, rendered);
  });
});

app.set('views', './views'); // specify the views directory
app.set('view engine', 'cte'); // register the template engine

// TODO completar con las rutas /cte1 y /cte2

/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
