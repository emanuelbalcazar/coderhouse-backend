const options = require('../config/database');
const knex = require('knex')(options);

knex.from('cars').where('price', '9000').update({ price: 9500 })
.then(() => {
    console.log('autos actualizados')
}).catch(error => {
    console.log('error:', error);
}).finally(() => {
    console.log('cerrando conexion...');
    knex.destroy();
});