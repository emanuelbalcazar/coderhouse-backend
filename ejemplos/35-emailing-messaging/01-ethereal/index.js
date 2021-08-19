const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'layne.wolff@ethereal.email',
        pass: 'yxQBGc4KeaxzhfeHvz'
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: 'emanuelbalcazar13@gmail.com',
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>'
}

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log(err)
        return err
    }
    console.log(info)
});



