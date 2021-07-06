const mongoose = require('mongoose');

var baseDeDatosConectada = false;

function conectarDB(url, cb) {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
      if(!err) {
        baseDeDatosConectada = true;
      }
      if(cb != null) {
        cb(err);
      }
  });
}

module.exports = {
  conectarDB
}
