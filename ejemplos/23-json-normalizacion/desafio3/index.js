const { normalize, schema } = require('normalizr');
const fs = require('fs')

const data = require('./empresa').hold;

const empleado = new schema.Entity('empleado');

const empresa = new schema.Entity('empresa', {
    gerente: empleado,
    encargado: empleado,
    empleados: [empleado]
});

const empresas = new schema.Entity('empresas', {
    empresas: [empresa]
});

const normalizedData = normalize(data, empresas);
fs.writeFileSync('./normalizado.json', JSON.stringify(normalizedData, null, 3));
