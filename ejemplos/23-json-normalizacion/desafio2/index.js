const { denormalize, schema } = require('normalizr');
const fs = require('fs');
const normalizado = require('../desafio1/normalizado.json');

const empleado = new schema.Entity('empleado');

const empresa = new schema.Entity('empresa', {
    gerente: empleado,
    encargado: empleado,
    empleados: [empleado]
});

const desnormalizado = denormalize(normalizado.result, empresa, normalizado.entities);
console.log(JSON.stringify(desnormalizado, null, 3));
fs.writeFileSync('./desnormalizado.json', JSON.stringify(desnormalizado, null, 3));
