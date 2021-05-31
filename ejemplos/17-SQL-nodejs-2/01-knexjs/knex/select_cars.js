const options = require('../config/database');
const knex = require('knex')(options);

knex.from('cars').select('*')
.then(rows => {
    for (row of rows) {
        console.log(`${row['id']} ${row['name']} ${row['price']}`);
    }
}).catch(error => {
    console.log('error:', error);
}).finally(() => {
    console.log('cerrando conexion...');
    knex.destroy();
});