const knex = require('../database/knex');

knex.schema.createTable('mensajes', table => {
    table.increments('id');
    table.string('mensaje');
    table.string('email');
    table.timestamp('fecha', { useTz: true }).notNullable().defaultTo(knex.fn.now());
}).then(() => {
    console.log('tabla mensajes creada!');
}).catch(error => {
    console.log('error:', error);
    throw error;
}).finally(() => {
    console.log('cerrando conexion...');
    process.exit(0);
});
