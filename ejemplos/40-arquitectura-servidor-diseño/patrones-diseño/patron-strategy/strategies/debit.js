const IPayment = require('./IPayment');

class Debit extends IPayment {
    constructor() {
        super();
    }

    pay(amount) {
        console.log('debit card:', amount);
    }
}

module.exports = new Debit();