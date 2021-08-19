const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: 'emanuelbalcazar13@gmail.com',
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba con archivo adjunto desde <span style="color: green;">Node.js con Nodemailer</span></h1>',
    attachments: [
        {   // filename and content type is derived from path
            path: 'nodemailer.png'
        }
    ]
}

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log(err)
        return err
    }
    console.log(info)
})
