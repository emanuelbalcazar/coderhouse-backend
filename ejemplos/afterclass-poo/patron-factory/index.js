const factory = require('./factory');

let Persistencia = factory.getPersistencia('memoria');
let instancia = new Persistencia();
instancia.guardar({ nombre: 'emanuel' });

Persistencia = factory.getPersistencia('archivo');
instancia = new Persistencia();
instancia.guardar({ nombre: 'emanuel' });

Persistencia = factory.getPersistencia('mysql');
instancia = new Persistencia();
instancia.guardar({ nombre: 'emanuel' });

