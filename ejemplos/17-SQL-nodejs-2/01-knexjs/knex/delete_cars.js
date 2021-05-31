const options = require('../config/database');
const knex = require('knex')(options);

knex.from('cars').del()
.then(() => {
    console.log('todos los autos eliminados!')
}).catch(error => {
    console.log('error:', error);
}).finally(() => {
    console.log('cerrando conexion...');
    knex.destroy();
});