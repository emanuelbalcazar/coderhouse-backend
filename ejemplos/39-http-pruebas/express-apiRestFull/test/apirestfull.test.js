const request = require('supertest')('http://localhost:8080')
const expect = require('chai').expect
const generador = require('../generador/usuarios')

let usuario = generador.get()
console.log(usuario)

describe('test api rest full', () => {
    describe('GET', () => {
        it('debería retornar un status 200', async () => {
            let response = await request.get('/api')
            //console.log(response.status)
            //console.log(response.body)
            expect(response.status).to.eql(200)
        })
    })
    describe('POST', () => {
        it('debería incorporar un usuario', async () => {
            /* let usuario = {
                nombre: 'Pepe',
                email: 'pepe@gmail.com'
            } */
            let usuario = generador.get()

            let response = await request.post('/api').send(usuario)
            //console.log(response.status)
            //console.log(response.body)
            expect(response.status).to.eql(200)

            const user = response.body
            expect(user).to.include.keys('nombre','email')
            /* expect(user.nombre).to.eql('Pepe')
            expect(user.email).to.eql('pepe@gmail.com') */
            expect(user.nombre).to.eql(usuario.nombre)
            expect(user.email).to.eql(usuario.email)
        })
    })
})
