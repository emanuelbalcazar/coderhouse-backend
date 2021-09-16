const IPayment = require('./IPayment');

class Credit extends IPayment {
    constructor() {
        super();
    }

    pay(amount) {
        console.log('credit:', amount);
    }
}

module.exports = new Credit();