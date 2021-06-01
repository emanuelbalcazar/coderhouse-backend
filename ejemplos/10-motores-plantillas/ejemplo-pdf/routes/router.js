const express = require('express');
const ejs = require('ejs');
const path = require('path');
const htmlPdf = require('html-pdf');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/api/datos', async (req, res) => {
    let html = await ejs.renderFile(path.join(__dirname, '../views/pdf.ejs'), req.body);
    let pdf = await createPDF(html);
    fs.writeFileSync(path.join(__dirname, `../docs/${Date.now()}-archivo.pdf`), pdf, 'binary');
    res.redirect('/');
});

async function createPDF(html) {
    return new Promise((resolve, reject) => {
        htmlPdf.create(html).toBuffer((err, buffer) => {
            if (err) {
                reject(err);
            } else {
                resolve(buffer);
            }
        });
    });
}

module.exports = router;