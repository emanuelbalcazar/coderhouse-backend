/**
 * operaciones.js - declaro las rutas asociadas a las operaciones
 */
const express = require('express');
const router = express.Router();

// instancio el controlador
const Operaciones = require('../api/operaciones');
const operaciones = new Operaciones();

router.get('/suma', (req, res) => {
    let resultado = operaciones.sumar(parseInt(req.query.num1), parseInt(req.query.num2));
    res.send({ num1: req.query.num1, num2: req.query.num2, resultado: resultado });
});

router.get('/resta', (req, res) => {
    let resultado = operaciones.restar(parseInt(req.query.num1), parseInt(req.query.num2));
    res.send({ num1: req.query.num1, num2: req.query.num2, resultado: resultado });
});

router.get('/div', (req, res) => {
    let resultado = operaciones.dividir(parseInt(req.query.num1), parseInt(req.query.num2));
    res.send({ num1: req.query.num1, num2: req.query.num2, resultado: resultado });
});

router.get('/mult', (req, res) => {
    let resultado = operaciones.multiplicar(parseInt(req.query.num1), parseInt(req.query.num2));
    res.send({ num1: req.query.num1, num2: req.query.num2, resultado: resultado });
});

module.exports = router;
