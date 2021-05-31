const options = require('../config/database');
const knex = require('knex')(options);

knex.schema.createTable('cars', table => {
    table.increments('id');
    table.string('name');
    table.integer('price');
}).then(() => {
    console.log('tabla cars creada!');
}).catch(error => {
    console.log('error:', error);
    throw error;
}).finally(() => {
    console.log('cerrando conexion...');
    knex.destroy();
});
