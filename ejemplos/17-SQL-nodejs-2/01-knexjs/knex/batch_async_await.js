const options = require('../config/database');
const knex = require('knex')(options);

const cars = [
    { name: 'Audi', price: 52642 },
    { name: 'Mercedes', price: 57127 },
    { name: 'Skoda', price: 9000 },
    { name: 'Volvo', price: 29000 },
    { name: 'Bentley', price: 350000 },
    { name: 'Citroen', price: 21000 },
    { name: 'Hummer', price: 41400 },
    { name: 'Volkswagen', price: 21600 }
];

(async () => {
    try {
        console.log('--> borramos todos los autos');
        await knex('cars').del();

        console.log('--> insertamos los autos');
        await knex('cars').insert(cars);

        console.log('--> leemos todos los autos');
        let rows = await knex.from('cars').select('*');

        for (row of rows) {
            console.log(`${row['id']} ${row['name']} ${row['price']}`);
        }

        console.log('--> insertamos un auto mas');
        await knex('cars').insert({ name: 'Fiat', price: 7777 });

        console.log('--> leemos todos los autos actualizados');
        rows = await knex.from('cars').select('*');

        for (row of rows) {
            console.log(`${row['id']} ${row['name']} ${row['price']}`);
        }

    } catch (error) {
        console.log(error);
    } finally {
        knex.destroy();
    }
})();
