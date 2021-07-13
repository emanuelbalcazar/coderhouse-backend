const mongoose = require('mongoose');

const uri = "mongodb+srv://root:root@cluster0.1w8lp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const MyModel = mongoose.model('users', new mongoose.Schema({ nombre: String, apellido: String }));

async function connect() {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`mongoose conectado en ${uri}`);
    await MyModel.create({ nombre: 'Emanuel', apellido: 'Balcazar' });
    return;
}

connect();
