const { normalize, schema } = require('normalizr');
const fs = require('fs')

const data = require('./empresa').empresa;

const empleado = new schema.Entity('empleado');

const empresa = new schema.Entity('empresa', {
    gerente: empleado,
    encargado: empleado,
    empleados: [empleado]
});

const normalizedData = normalize(data, empresa);
console.log(JSON.stringify(normalizedData, null, 3));
fs.writeFileSync('./normalizado.json', JSON.stringify(normalizedData, null, 3));
