import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import config from '../config.js'

import ControladorNoticias from '../controlador/noticias.js'


class RouterNoticias {

    constructor() {
        this.controladorNoticias = new ControladorNoticias()
    }

    start() {
        // GraphQL schema
        const schema = buildSchema(`
            type Query {
                noticias(_id: String): [Noticia]
            }
            type Mutation {
                guardarNoticia(
                    titulo: String!,
                    cuerpo: String!,
                    autor: String!,
                    imagen: String!,
                    email: String!,
                    vista: Boolean!,
                ): Noticia,
                actualizarNoticia(
                    _id: String!,
                    vista: Boolean!,
                ): Noticia,
                borrarNoticia(
                    _id: String!,
                ): Noticia,                                
            },
            type Noticia {
                _id: String,
                titulo: String
                cuerpo: String
                autor: String
                imagen: String
                email: String
                vista: Boolean
            }    
        `);

        // Root resolver
        const root = {
            noticias : _id => this.controladorNoticias.obtenerNoticias(_id),
            guardarNoticia : this.controladorNoticias.guardarNoticia,
            actualizarNoticia: (_id,noticias) => this.controladorNoticias.actualizarNoticia(_id,noticias),
            borrarNoticia : _id => this.controladorNoticias.borrarNoticia(_id)
        };

        return graphqlHTTP({
            schema: schema,
            rootValue: root,
            graphiql: config.GRAPHIQL == 'true'
        })
    }
}

export default RouterNoticias