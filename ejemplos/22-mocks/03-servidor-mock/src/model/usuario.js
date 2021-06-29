const faker = require('faker');

class UsuarioModel {

    constructor() {

    }

    generarId() {
        return faker.datatype.uuid()
    }

    generarUsuario() {
        return {
            id: faker.datatype.uuid(),
            nombre: faker.name.firstName(),
            email: faker.internet.email(),
            website: faker.internet.url(),
            image: faker.image.avatar()
        }
    }
}

module.exports = new UsuarioModel();