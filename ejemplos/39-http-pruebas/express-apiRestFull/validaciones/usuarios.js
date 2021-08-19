const Joi = require('@hapi/joi')

const validar = usuario => {
    const usuarioSchema = Joi.object({
        nombre: Joi.string().alphanum().required(),
        email: Joi.string().email().required()
    })

    const { error } = usuarioSchema.validate(usuario)
    if(error) {
        return { result: false, error }
    }
    else {
        return { result: true }
    }
}

module.exports = {
    validar
}
