const mysql = require('./config.json');
const knex = require('knex')(mysql);

async function createTables() {
    try {
        console.log('iniciando creacion de tablas...');

        await knex.schema.createTable('productos', table => {
            table.increments('id');
            table.string('nombre');
            table.integer('precio');
            table.integer('stock');
        });

        await knex.schema.createTable('carritos', table => {
            table.increments('id');
            table.string('nombre');
            table.integer('producto_id').unsigned();
            table.foreign('producto_id')
            .references('id')
            .inTable('productos')
        });

        console.log('tablas creadas!');
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

createTables();