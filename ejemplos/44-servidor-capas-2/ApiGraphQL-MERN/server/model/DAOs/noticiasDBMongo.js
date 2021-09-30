import noticiaDTO from '../DTOs/noticias.js'
import NoticiasBaseDAO from './noticias.js'

import mongodb from 'mongodb';
const { MongoClient,ObjectId } = mongodb;

class NoticiasDBMongoDAO extends NoticiasBaseDAO {

    constructor(database, collection) {
        super()
        ;( async () => {
            console.log('Contectando a la Base de datos...')
            /* ---------------------------------------------------------------- */
            /*              Conexión a la base de datos warriors                */
            /* ---------------------------------------------------------------- */
            // connecting at mongoClient
            const connection = await MongoClient.connect('mongodb://localhost',{
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            const db = connection.db(database);
            this._collection = db.collection(collection);
            /* ---------------------------------------------------------------- */
            console.log('Base de datos conectada')
        })()
    }

    obtenerNoticias = async _id => {
        try {
            if(_id) {
                console.log(_id)
                const noticia = await this._collection.findOne({_id: ObjectId(_id)})
                console.log(noticia)
                return [noticia]
            }
            else {
                const noticias = await this._collection.find({}).toArray()
                return noticias;
            }
        }
        catch(error) {
            console.log('obtenerNoticias error', error)
        }
    }

    guardarNoticia = async noticia => {
        try{
            await this._collection.insertOne(noticia);
            return noticia
        }
        catch(error) {
            console.log('guardarNoticia error', error)
            return noticia
        }

    }

    actualizarNoticia = async (_id,noticia) => {
        try {
            await this._collection.updateOne({_id:ObjectId(_id)}, {$set: noticia});
            return noticia
        }
        catch(error) {
            console.log('actualizarNoticia error', error)
            return noticia
        }
    }

    borrarNoticia = async _id => {
        let noticiaBorrada = noticiaDTO({},_id,null)
        try {
            await this._collection.deleteOne({_id:ObjectId(_id)})
            return noticiaBorrada
        }
        catch(error) {
            console.log('borrarNoticia error', error)
            return noticiaBorrada
        }        
    }
}

export default NoticiasDBMongoDAO