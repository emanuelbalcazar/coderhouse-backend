const options = require('../config/database');
const knex = require('knex')(options);

knex.from('cars').where('price', '>', '50000').del()
.then(() => {
    console.log('autos eliminados')
}).catch(error => {
    console.log('error:', error);
}).finally(() => {
    console.log('cerrando conexion...');
    knex.destroy();
});