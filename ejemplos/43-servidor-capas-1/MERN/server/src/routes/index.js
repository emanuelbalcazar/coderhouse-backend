const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bienvenido al servidor del stack MERN');
});

module.exports = router;