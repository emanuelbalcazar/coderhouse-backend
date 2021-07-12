const mongoose = require('mongoose');
const Estudiante = require('./models/estudiante');
const config = require('./config.json');
const estudiantes = require('./estudiantes.json');

async function cargar() {
    await mongoose.connect(config.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('conexion a la base de datos realizada!');

    await Estudiante.create(estudiantes);
}

async function lectura() {

    // 1. actualizar el dni del estudiante Lucas Blanco a 20355875
    console.log(await Estudiante.updateOne({ nombre: 'Lucas', apellido: 'Blanco' }, { dni: '20355875' }))

    // 2. agregar el campo "ingreso" a todos los estudiantes con el valor false
    console.log(await Estudiante.updateMany({}, { $set: { ingreso: false } }));

    // 3. modificar el valor ingreso a true para todos los estudiantes que pertenezcan al curso 1A
    console.log(await Estudiante.updateMany({ curso: '1A' }, { $set: { ingreso: true } }));

    // 4. listar todos los estudiantes que aprobaron (con 4 en adelante) sin los campos _id y __v
    console.log(await Estudiante.find({ nota: { $gte: 4 } }, '-_id -__v'));

    // 5. listar todos los estudiantes que posean el campo "ingreso" en true sin los campos _id y __v
    console.log(await Estudiante.find({ ingreso: true }, '-_id -__v'));

    // 6. borrar la coleccion de estudiantes cuyo campo "ingreso" este en true
    //console.log(await Estudiante.deleteMany({ ingreso: true }));

    // 7. listar el contenido de la coleccion estudiantes utilizando la consola
    console.log(await Estudiante.find({}));

    return;
}

async function borrar() {
    await Estudiante.deleteMany({});
    console.log('todos los estudiantes fueron eliminados de la base');
}

async function main() {
    try {
        await cargar();
        await lectura();
        //await borrar();
    } catch (error) {
        console.log('error:', error);
    } finally {
        process.exit(0);
    }
}

main();

