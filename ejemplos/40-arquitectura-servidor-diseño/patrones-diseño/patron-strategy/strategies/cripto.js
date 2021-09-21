const IPayment = require('./IPayment');

class Cripto extends IPayment {
    constructor() {
        super();
    }

    pay(amount) {
        console.log('cripto:', amount);
    }
}

module.exports = new Cripto();