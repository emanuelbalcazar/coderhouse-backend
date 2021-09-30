import config from './config.js';
import express from 'express'
import cors from 'cors'
import RouterNoticias from './router/noticias.js'

const app = express()

if(config.NODE_ENV == 'development') app.use(cors())

app.use(express.static('public'))
app.use(express.json())

const routerNoticias = new RouterNoticias()

/* ------------------------------------------------------------- */
/*             ZONA DE RUTAS MANEJADAS POR EL ROUTER             */
/* ------------------------------------------------------------- */
app.use('/noticias', routerNoticias.start())

/* ------------------------------------------------------------- */
/*                      Servidor LISTEN                          */
/* ------------------------------------------------------------- */
const PORT = config.PORT || 8000
const server = app.listen(PORT, 
    () => console.log(
        `Servidor express GRAPHQL escuchando en el puerto ${PORT}
        \rConfig: [Modo: ${config.NODE_ENV}, Persistencia: ${config.TIPO_PERSISTENCIA}, GRAPHiQL: ${config.GRAPHIQL=='true'?'Si':'No'}]`
))
server.on('error', error => console.log('Servidor express en error:', error) )
