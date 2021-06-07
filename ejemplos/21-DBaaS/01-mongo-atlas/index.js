const mongoose = require('mongoose');

const uri = "mongodb+srv://root:root@cluster0.1w8lp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, error => {
        if (error)
            console.log(error);
        else
            console.log('Conectado a mongo atlas');
    });
