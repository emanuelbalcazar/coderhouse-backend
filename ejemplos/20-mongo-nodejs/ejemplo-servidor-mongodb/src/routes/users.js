const express = require('express');
const router = express.Router();
const UsersController = require('../api/users');

router.get('/users', async (req, res) => {
    try {
        let result = await UsersController.findAll();
        return res.json(result);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        let result = await UsersController.findById(req.params.id);
        return res.json(result);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.post('/users', async (req, res) => {
    try {
        let result = await UsersController.create(req.body);
        return res.json(result);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.put('/users/:id', async (req, res) => {
    try {
        let result = await UsersController.update(req.params.id, req.body);
        return res.json(result);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        let result = await UsersController.delete(req.params.id);
        return res.json(result);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports = router;