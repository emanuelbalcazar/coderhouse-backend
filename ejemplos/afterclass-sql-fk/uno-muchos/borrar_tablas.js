const mysql = require('./config.json');
const knex = require('knex')(mysql);

async function borrarTablas() {

    try {
        console.log('borrando tablas...')
        await knex.schema.dropTableIfExists('carritos');
        await knex.schema.dropTableIfExists('productos');
        console.log('tablas borradas!');
        process.exit(0)
    } catch (error) {
        console.log(error);
    }
}

borrarTablas();