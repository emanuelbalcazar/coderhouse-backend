import ApiNoticias from '../api/noticias.js'

class ControladorNoticias {

    constructor() {
        this.apiNoticias = new ApiNoticias()
    }

    obtenerNoticias = async (req,res) => {
        try {
            let id = req.params.id
            //console.log(id)
            let Noticias = await this.apiNoticias.obtenerNoticias(id)

            res.send(Noticias)
        }
        catch(error) {
            console.log('error obtenerNoticias', error)
        }
    }

    guardarNoticia = async (req,res) => {
        try {
            let Noticia = req.body
            //console.log(Noticia)
            let NoticiaGuardada = await this.apiNoticias.guardarNoticia(Noticia)

            res.json(NoticiaGuardada)
        }
        catch(error) {
            console.log('error obtenerNoticias', error)
        }
    }

    actualizarNoticia = async (req,res) => {
        try {
            let Noticia = req.body
            let id = req.params.id
            //console.log(Noticia)
            let NoticiaActualizada = await this.apiNoticias.actualizarNoticia(id,Noticia)
            res.json(NoticiaActualizada)
        }
        catch(error) {
            console.log('error obtenerNoticias', error)
        }
    }

    borrarNoticia = async (req,res) => {
        try {
            let id = req.params.id
            let NoticiaBorrada = await this.apiNoticias.borrarNoticia(id)
            res.json(NoticiaBorrada)
        }
        catch(error) {
            console.log('error obtenerNoticias', error)
        }
    }
}

export default ControladorNoticias
