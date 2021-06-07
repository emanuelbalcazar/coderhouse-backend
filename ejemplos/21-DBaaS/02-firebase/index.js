const admin = require('firebase-admin');

const account = require('./firebase-clave.json');

admin.initializeApp({
    credential: admin.credential.cert(account),
    database: "coderhouse-backend.firebaseio.com"
});

console.log('Conexion a la base de datos realizada!');

async function CRUD() {

    const db = admin.firestore();
    const query = db.collection('usuarios');

    try {

        /* CREATE */
        await query.add({ nombre: 'emanuel', apellido: 'balcazar', edad: 26 });
        await query.add({ nombre: 'juan', apellido: 'perez', edad: 52 });
        await query.add({ nombre: 'maria', apellido: 'aldana', edad: 34 });

        console.log('datos insertados!');

        /* READ */
        let snapshot = await query.get();

        const usuarios = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                nombre: doc.data().nombre,
                apellido: doc.data().apellido,
                edad: doc.data().edad
            }
        });

        console.log('usuarios obtenidos:', usuarios);

        /* UPDATE */
        let id = usuarios[0].id;
        let doc = query.doc(id);
        let item = await doc.update({ edad: 100 });
        console.log(`usuario con id ${id} actualizado!`, item);

        /* DELETE */
        item = await doc.delete();
        console.log(`usuario con id ${id} eliminado!`, item);

    } catch (error) {
        console.log('error', error);
    }
}

CRUD();
