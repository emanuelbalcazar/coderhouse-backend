const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/subir', async (req, res) => {
    try {
        const { numero, mensaje, archivo } = req.body;
        const resultado = await enviarWhatsapp(numero, mensaje, archivo);
        console.log(resultado);
        res.redirect('/')
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

function enviarWhatsapp(numero, mensaje, archivo) {
    const opciones = {
        body: mensaje,
        from: 'whatsapp:+14155238886',
        to: `whatsapp:${numero}`,
        mediaUrl: [archivo]
    }

    return client.messages.create(opciones);
}

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});

server.on('error', error => console.log(error));