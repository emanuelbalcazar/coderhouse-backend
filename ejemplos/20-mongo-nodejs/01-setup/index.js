const mongoose = require('mongoose');
const usuario = require('./models/usuario');
const config = require('./config.json');

async function main() {

    let result;

    // conexion a la base de datos
    await mongoose.connect(config.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('conexion a la base de datos realizada!');

    /* crear un nuevo usuario */
    console.log('\ncrear un nuevo usuario');
    const data = { nombre: 'Juan', apellido: 'Perez', email: 'juanperez@gmail.com', usuario: 'jperez', password: '123456' };
    let usuarioGuardado = await usuario.create(data);
    console.log(usuarioGuardado);

    await usuario.create({ nombre: 'Emanuel', apellido: 'Balcazar', email: 'emanuelbalcazar13@gmail.com', usuario: 'ebalcazar', password: '123456' });
    await usuario.create({ nombre: 'Maria', apellido: 'Aldana', email: 'mariaaldana@gmail.com', usuario: 'maldana', password: '123456' })

    /* buscar usuario por id */
    console.log('\nbuscar usuario por id');
    result = await usuario.findById(usuarioGuardado._id);
    console.log(result);

    /* buscar todos los usuarios */
    console.log('\nbuscar todos los usuarios');
    result = await usuario.find({});
    console.log(result);

    /* buscar un solo usuario */
    console.log('\nbuscar un solo usuario');
    result = await usuario.findOne({});
    console.log(result);

    /* actualizar un usuario */
    console.log('\nactualizar un usuario');
    usuarioGuardado.password = '654321';
    usuarioGuardado = await usuarioGuardado.save();
    // usuario.updateOne({nombre: 'Emanuel'}, { $set: {password: 8787878}});
    console.log(usuarioGuardado);

    /* eliminar un usuario */
    console.log('\neliminar un usuario');
    result = await usuario.deleteOne({ _id: usuarioGuardado._id });
    console.log(result);

    /* eliminar todos los usuarios */
    console.log('\neliminar a todos los usuarios');
    result = await usuario.deleteMany({});
    console.log(result);

    console.log('\nbuscar todos los usuarios de nuevo');
    result = await usuario.find({});
    console.log(result);

    process.exit(0);
}

main();
