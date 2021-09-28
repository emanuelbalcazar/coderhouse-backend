import fs  from 'fs'
import noticiaDTO from '../DTOs/noticias.js'
import NoticiasBaseDAO from './noticias.js'

class NoticiasFileDAO extends NoticiasBaseDAO {

    constructor(nombreArchivo) {
        super()
        this.nombreArchivo = nombreArchivo
    }

    async leer(archivo) {
        return JSON.parse(await fs.promises.readFile(archivo,'utf-8'))
    }

    async guardar(archivo,noticias) {
        await fs.promises.writeFile(archivo, JSON.stringify(noticias,null,'\t') )
    }

    obtenerNoticias = async _id => {
        try {
            if(_id) {
                let noticias = await this.leer(this.nombreArchivo)
                let index = noticias.findIndex(noticia => noticia._id == _id)

                return index>=0? [noticias[index]] : []
            }
            else {
                let noticias = await this.leer(this.nombreArchivo)
                return noticias
            }
        }
        catch(error) {
            console.log('error en obtenerNoticias:',error)
            let noticias = []

            //guardo archivo
            await this.guardar(this.nombreArchivo,noticias)
            return noticias
        }
    }

    guardarNoticia = async noticia => {
        try {
            //leo archivo
            let noticias = await this.leer(this.nombreArchivo)

            let _id = this.getNext_Id(noticias)
            let fyh = new Date().toLocaleString()
            let noticiaGuardada = noticiaDTO(noticia,_id,fyh)
            noticias.push(noticiaGuardada)

            //guardo archivo
            await this.guardar(this.nombreArchivo,noticias)

            return noticiaGuardada
        }
        catch(error) {
            console.log('error en guardarNoticia:',error)
            let noticia = {}

            return noticia
        }
    }

    actualizarNoticia = async (_id,noticia) => {
        try {
            //leo archivo
            let noticias = await this.leer(this.nombreArchivo)

            let fyh = new Date().toLocaleString()
            let noticiaNew = noticiaDTO(noticia,_id,fyh)

            let indice = this.getIndex(_id,noticias)
            let noticiaActual = noticias[indice] || {}

            let noticiaActualizada = {...noticiaActual,...noticiaNew}

            indice>=0? 
                noticias.splice(indice,1,noticiaActualizada) :
                noticias.push(noticiaActualizada)

            //guardo archivo
            await this.guardar(this.nombreArchivo,noticias)

            return noticiaActualizada
        }
        catch(error) {
            console.log('error en actualizarNoticia:',error)
            let noticia = {}

            return noticia
        }

    }

    borrarNoticia = async _id => {
        try {
            //leo archivo
            let noticias = await this.leer(this.nombreArchivo)

            let indice = this.getIndex(_id,noticias)
            let noticiaBorrada = noticias.splice(indice,1)[0]

            //guardo archivo
            await this.guardar(this.nombreArchivo,noticias)

            return noticiaBorrada
        }
        catch(error) {
            console.log('error en borrarNoticia:',error)
            let noticia = {}

            return noticia
        }
    }
}

export default NoticiasFileDAO