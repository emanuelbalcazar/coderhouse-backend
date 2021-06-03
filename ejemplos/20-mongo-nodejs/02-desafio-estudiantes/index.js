const mongoose = require('mongoose');
const estudiante = require('./models/estudiante');
const config = require('./config.json');
const estudiantes = require('./estudiantes.json');

async function cargar() {

    await mongoose.connect(config.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('conexion a la base de datos realizada!');

    await estudiante.insertMany(estudiantes);
    console.log(`se cargaron ${estudiantes.length} estudiantes`);
}

async function lectura() {
    console.log('realizar las lecturas de las consignas');
}

async function borrar() {
    await estudiante.deleteMany({});
    console.log('todos los estudiantes fueron eliminados de la base');
}

async function main() {
    try {
        await cargar();
        await lectura();
        await borrar();
    } catch (error) {
        console.log('error:', error);
    } finally {
        process.exit(0);
    }
}

main();

