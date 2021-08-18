const express = require('express');
const compression = require('compression');
const loggerFactory = require('./loggers/logger.factory');

const logger = loggerFactory.getLogger('pino');

const app = express();
app.use(compression());

const PORT = parseInt(process.argv[2]) || 8080

app.get('/suma', (req, res) => {
    let { num1, num2 } = req.query;
    logger.info(`la operación de suma fue exitosa`);
    res.send({resultado: sumar(num1, num2)});
});

function sumar(num1, num2) {
    try {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('debe ingresar dos numeros')
        }
        return parseInt(num1) + parseInt(num2);
    } catch (error) {
        logger.error(`se ingresaron parametros incorrectos ${num1} ${num2}`);
        return error;
    }
}

app.listen(PORT, () => {
    logger.info(`Servidor express escuchando en el http://localhost:${PORT}`)
});

