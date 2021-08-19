const Todos = require('./index')
const assert = require('assert').strict
const fs = require('fs')

describe("test de integración de tareas", function () {

    it('debería crear el contenedor de tareas vacío', function () {
        const todos = new Todos()
        assert.strictEqual(todos.list().length, 0)
    })

    it('debería adicionar tareas correctamente', function () {
        const todos = new Todos()

        todos.add("run code")
        assert.strictEqual(todos.list().length, 1)
        assert.deepStrictEqual(todos.list(), [{ title: 'run code', complete: false }])

        todos.add("otra tarea")
        assert.strictEqual(todos.list().length, 2)
        assert.deepStrictEqual(todos.list(), [
            { title: 'run code', complete: false },
            { title: 'otra tarea', complete: false }
        ])
    })

    it('debería marcar una tarea como completa', function () {
        const todos = new Todos()

        todos.add("run code")
        todos.add("otra tarea")

        todos.complete("run code")
        assert.deepStrictEqual(todos.list(), [
            { title: 'run code', complete: true },
            { title: 'otra tarea', complete: false }
        ])

    })
})

describe("comprobar error en completar tarea inexistente", function () {

    it('deberia dar error cuando no hay tareas cargadas', function () {
        const todos = new Todos()

        const errorEsperado = new Error('No hay tareas')
        assert.throws(() => {
            todos.complete('una tareas más')
        }, errorEsperado)
    })

    it('deberia dar error cuando la tarea a completar no existe', function () {
        const todos = new Todos()
        todos.add("run code")

        const errorEsperado = new Error('Tarea no encontrada')
        assert.throws(() => {
            todos.complete('una tareas más')
        }, errorEsperado)
    })
})

describe("comprobando que saveToFileCb() funcione bien", function () {
    it('debería guardar una tarea en el archivo todos.txt', function (done) {
        const todos = new Todos()
        todos.add('guardar tarea callback')
        todos.saveToFileCb(err => {
            assert.strictEqual(fs.existsSync('todos.txt'), true)
            let contenidoEsperado = 'guardar tarea callback,false'
            let content = fs.readFileSync('todos.txt').toString();
            assert.strictEqual(content, contenidoEsperado)
            done(err)
        })
    })
})


describe("comprobando que saveToFilePromises() funcione bien", function () {

    before(function () {
        console.log('\n********* Comienzo TOTAL de Test *********')
    })

    after(function () {
        console.log('\n********* Fin TOTAL de Test *********')
    })

    beforeEach(function () {
        console.log('\n********* Comienzo Test *********')
    })

    beforeEach(function () {
        this.todos = new Todos()
    })

    afterEach(function () {
        if (fs.existsSync('todos.txt')) {
            fs.unlinkSync('todos.txt')
        }
    })

    afterEach(function () {
        console.log('********* Fin Test *********\n')
    })

    it('debería guardar una tarea en el archivo todos.txt (then/catch)', function () {
        //const todos = new Todos()
        //todos.add('guardar tarea Promises TC')
        this.todos.add('guardar tarea Promises TC')
        //return todos.saveToFilePromise().then(() => {
        return this.todos.saveToFilePromise().then(() => {
            assert.strictEqual(fs.existsSync('todos.txt'), true)
            let contenidoEsperado = 'guardar tarea Promises TC,false'
            let content = fs.readFileSync('todos.txt').toString();
            assert.strictEqual(content, contenidoEsperado)
        })
    })

    it('debería guardar una tarea en el archivo todos.txt (async/await)', async function () {
        //const todos = new Todos()
        //todos.add('guardar tarea Promises AA')
        this.todos.add('guardar tarea Promises AA')

        //await todos.saveToFilePromise()
        await this.todos.saveToFilePromise()

        assert.strictEqual(fs.existsSync('todos.txt'), true)
        let contenidoEsperado = 'guardar tarea Promises AA,false'
        let content = fs.readFileSync('todos.txt').toString();
        assert.strictEqual(content, contenidoEsperado)
    })

})
