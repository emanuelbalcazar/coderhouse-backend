const express = require('express');
const router = express.Router();
const controller = require('../controllers/article');

router.get('/articles', async (req, res) => {
    try {
        let articles = await controller.find();
        res.send(articles);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.get('/articles/:id', async (req, res) => {
    try {
        let article = await controller.findById(req.params.id);
        res.send(article);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.post('/articles', async (req, res) => {
    try {
        let created = await controller.create(req.body);
        res.send(created);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.put('/articles/:id', async (req, res) => {
    try {
        let updated = await controller.update(req.params.id, req.body);
        res.send(created);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.delete('/articles/:id', async (req, res) => {
    try {
        let deleted = await controller.delete(req.params.id);
        res.send(deleted);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;