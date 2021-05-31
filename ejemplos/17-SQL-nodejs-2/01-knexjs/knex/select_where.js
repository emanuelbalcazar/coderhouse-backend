const options = require('../config/database');
const knex = require('knex')(options);

knex.from('cars').select('name', 'price').where('price', '>', '50000')
.then(rows => {
    for (row of rows) {
        console.log(`${row['name']} ${row['price']}`);
    }
}).catch(error => {
    console.log('error:', error);
}).finally(() => {
    console.log('cerrando conexion...');
    knex.destroy();
});