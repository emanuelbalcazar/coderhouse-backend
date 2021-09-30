import Joi from 'joi'

class Noticias {

    constructor(titulo, cuerpo, autor, imagen, email, vista) {
        this.titulo = titulo
        this.cuerpo = cuerpo
        this.autor = autor
        this.imagen = imagen
        this.email = email
        this.vista = vista
    }

    equals(otroNoticias) {
        if (!(otroNoticias instanceof Noticias)) {
            return false
        }
        if (this.titulo != otroNoticias.titulo) {
            return false
        }
        if (this.cuerpo != otroNoticias.cuerpo) {
            return false
        }
        if (this.autor != otroNoticias.autor) {
            return false
        }
        if (this.imagen != otroNoticias.imagen) {
            return false
        }
        if (this.email != otroNoticias.email) {
            return false
        }
        if (this.vista != otroNoticias.vista) {
            return false
        }
        return true
    }

    static validar(noticia,requerido) {
        //console.log(noticia,requerido)
        const NoticiaSchema = Joi.object({
            titulo: requerido? Joi.string().required() : Joi.string(),
            cuerpo: requerido? Joi.string().required() : Joi.string(),
            autor: requerido? Joi.string().required() : Joi.string(),
            imagen: requerido? Joi.string().required() : Joi.string(),
            email: requerido? Joi.string().required() : Joi.string(),
            vista: requerido? Joi.boolean().required() : Joi.boolean()
        })

        const { error } = NoticiaSchema.validate(noticia)
        if (error) {
            throw error
        }
    }
}

export default Noticias