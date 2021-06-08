const express = require('express');
const router = express.Router();
const controller = require('../api/usuario');

router.get('/generar/:cant', (req, res) => {
    let mocks = controller.generar(req.params.cant);
    res.send(mocks);
});

router.get('/usuarios/:id', (req, res) => {
    let usuario = controller.buscarPorId(req.params.id);
    res.send(usuario);
});

router.get('/usuarios', (req, res) => {
    let usuarios = controller.listar();
    res.send(usuarios);
});

router.post('/usuarios', (req, res) => {
    let resultado = controller.agregar(req.body);
    res.send(resultado);
});

router.put('/usuarios/:id', (req, res) => {
    let resultado = controller.actualizar(req.params.id, req.body);
    res.send(resultado);
});

router.delete('/usuarios/:id', (req, res) => {
    let resultado = controller.eliminar(req.params.id);
    res.send(resultado);
});

module.exports = router;