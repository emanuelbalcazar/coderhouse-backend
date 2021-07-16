const mysql = require('./config.json');
const knex = require('knex')(mysql);

async function consultas() {

    /**
     * productos del carrito 1
     * SELECT * FROM `carritos` JOIN `productos` ON carritos.producto_id = productos.id WHERE carritos.nombre = 'carrito 1'
     */
    let rows = await knex.from('carritos')
        .join('productos', 'productos.id', 'carritos.producto_id')
        .select('carritos.id as id', 'carritos.nombre as carritoNombre', 'productos.nombre as productoNombre')
        .where('carritos.nombre', '=', 'carrito 1')

    for (row of rows) {
        console.log(row);
    }

    process.exit(0);
}

consultas();