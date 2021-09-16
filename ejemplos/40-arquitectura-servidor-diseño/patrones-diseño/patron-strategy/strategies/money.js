const IPayment = require('./IPayment');

class Money extends IPayment {
    constructor() {
        super();
    }

    pay(amount) {
        console.log('money $:', amount);
    }
}

module.exports = new Money();