import express from 'express'
const router = express.Router()

import ControladorNoticias from '../controlador/noticias.js'

class RouterNoticias {

    constructor() {
        this.controladorNoticias = new ControladorNoticias()
    }

    start() {
        router.get('/:id?', this.controladorNoticias.obtenerNoticias)
        router.post('/', this.controladorNoticias.guardarNoticia)
        router.put('/:id', this.controladorNoticias.actualizarNoticia)
        router.delete('/:id', this.controladorNoticias.borrarNoticia)

        return router
    }
}

export default RouterNoticias