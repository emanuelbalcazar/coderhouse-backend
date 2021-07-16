const mysql = require('./config.json');
const knex = require('knex')(mysql);

const productos = [
    { nombre: 'reloj', precio: 100, stock: 10 },
    { nombre: 'cama', precio: 230, stock: 3 },
    { nombre: 'lupa', precio: 10, stock: 6 },
    { nombre: 'silla', precio: 340, stock: 30 }
]

const carritos = [
    { nombre: 'carrito 1', producto_id: 1 },
    { nombre: 'carrito 1', producto_id: 2 },
    { nombre: 'carrito 2', producto_id: 3 },
    { nombre: 'carrito 2', producto_id: 4 },
    { nombre: 'carrito 3' },
]

async function insertar() {
    try {
        console.log('insertando datos...')
        await knex('productos').insert(productos);
        await knex('carritos').insert(carritos);
        console.log('datos agregados!');
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

insertar();

