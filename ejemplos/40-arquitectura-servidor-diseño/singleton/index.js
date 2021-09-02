const Singleton = require('./singleton');

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

instance1.printValue();
instance2.printValue();

console.log('Iguales?', instance1 === instance2);
