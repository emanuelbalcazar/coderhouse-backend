import NoticiasMemDAO from './noticiasMem.js'
import NoticiasFileDAO from './noticiasFile.js'
import NoticiasDBMongo from './noticiasDBMongo.js'

class NoticiasFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM': return new NoticiasMemDAO()
            case 'FILE': return new NoticiasFileDAO(process.cwd() + '/noticias.json')
            case 'MONGO': return new NoticiasDBMongo('mibase','noticias')
            default: return new NoticiasMemDAO
        }
    }
}

export default NoticiasFactoryDAO