const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const util = require('./util/usuarios')
const validaciones = require('./validaciones/usuarios')
const model = require('./model/usuarios')

/* ------------ INSTANCIA 1 DE SERVIDOR --------------- */
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

/* Middleware custom */
app.use((req,res,next) => {
    next()
})


let usuarios = []

/* ---------------------------------------------------- */
/*                   Ruta GET: params                   */
/* ---------------------------------------------------- */
app.get('/datos/:nombre?/:edad?', (req,res) => {
    let { url, method } = req
    //let nombre = req.query.nombre
    //let { nombre } = req.query  //destructuring object
    //let nombre = req.params.nombre
    let { nombre, edad } = req.params  //destructuring object
    res.send(`<h3>Ruta: ${method} - url: ${url} - nombre: ${nombre} - edad: ${edad}</h3>`)
})


/* ---------------------------------------------------- */
/* ---------------------------------------------------- */
/*                     API REST FULL                    */
/* ---------------------------------------------------- */
/* ---------------------------------------------------- */

/* ---------------------------------------------------- */
/*     Definición de rutas GET (Pedir información)      */
/* ---------------------------------------------------- */
router.get('/:id?', (req,res) => {
    let {id} = req.params

    let query = id? {_id:id} : {}
    model.usuario.find(query, (err,usuarios) => {
        if(err) throw new Error(`error en lectura de usuarios: ${err}`)
        usuarios.forEach(usuario => {
            console.log(usuario)
        })
        res.send(usuarios)
    })
    /*
    if(id) {
        let index = util.getIndex(id, usuarios)
        let usuario = usuarios[index]
        res.send(usuario)
    }
    else {
        res.send(usuarios)
    }
    */
})
/* ---------------------------------------------------- */
/*     Definición de rutas POST  (Enviar información)   */
/* ---------------------------------------------------- */
router.post('/', (req,res) => {
    let usuario = req.body
    
    let val = validaciones.validar(usuario)
    if(val.result) {
        const usuarioNuevo = new model.usuario(usuario)
        usuarioNuevo.save(err => {
            if(err) throw new Error(`error en escritura de usuario: ${err}`)
            console.log('Usuario incorporado')
            //res.send({...usuario, nombre: 'Juan'}) //Para causar error de test en post
            res.send(usuario)
        })

        /*
        usuario.id = util.getNextId(usuarios)
        usuario.timestamp = util.getTimestamp()
        usuario.fyh = util.getFechayHora()
        //usuario.fyh = util.getFechayHora

        usuarios.push(usuario)

        res.send(usuario)
        */
    }
    else {
        res.send(val.error)
    }
})

/* ---------------------------------------------------- */
/*   Definición de rutas PUT (Actualizar información)   */
/* ---------------------------------------------------- */
router.put('/:id', async (req,res) => {
    let {id} = req.params

    let usuario = req.body

    let val = validaciones.validar(usuario)
    if(val.result) {
        let rta = await model.usuario.updateOne({_id:id},{$set: usuario })
        res.send(rta)
        /*
        usuario.timestamp = util.getTimestamp()
        usuario.fyh = util.getFechayHora()

        let index = util.getIndex(id, usuarios)
        if(index != -1) {
            usuario.id = id
            //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
            usuarios.splice(index,1,usuario)
        }
        else {
            usuario.id = util.getNextId(usuarios)
            usuarios.push(usuario)
        }

        res.send(usuario)
        */
    }
    else {
        res.send(val.error)
    }
})

/* ---------------------------------------------------- */
/*   Definición de rutas DELETE (Eliminar información)  */
/* ---------------------------------------------------- */
router.delete('/:id', async (req,res) => {
    let {id} = req.params

    let rta = await model.usuario.deleteOne({_id:id},)
    res.send(rta)
    //let index = util.getIndex(id, usuarios)
    //let usuario = usuarios.splice(index,1)
    //res.send(usuario)
})
//----------------------------------------------------------------

app.use('/api',router)


const PORT = process.env.PORT || 8080

/* ---------------------------------------------------------------------------------- */
/* Conexión a MongoDB */
mongoose.connect('mongodb://localhost/mibase', {
//mongoose.connect('mongodb+srv://daniel:daniel123@misdatos.fs00f.mongodb.net/mibase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw new Error(`Error de conexión en la base de datos: ${err}`)
    console.log('Base de datos conectada!')

    /* ----------- app.listen : pone en marcha el listen del servidor ------------------ */
    const server = app.listen(PORT, () => {
        console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
    })
    server.on('error', error => console.log(`Error en Servidor: ${error}`))
})

