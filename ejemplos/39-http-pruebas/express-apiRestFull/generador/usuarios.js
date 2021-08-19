const faker = require('faker')

//faker.locale = 'es'

const get = () => ({
    nombre: faker.name.firstName(),
    email: faker.internet.email()
})

module.exports = {
    get
}