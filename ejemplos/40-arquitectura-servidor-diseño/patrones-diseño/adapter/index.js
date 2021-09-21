const computadora = require('./computadora');
const lampara = require('./lampara');
const adaptadorLampara = require('./adaptador-lampara');
const lamparaInglesa = require('./lampara-inglesa');

// enciendo los dispositivos
computadora.encender();
lampara.encender();
adaptadorLampara.encender();

// apago los dispositivos
computadora.apagar();
lampara.apagar();
adaptadorLampara.apagar();
