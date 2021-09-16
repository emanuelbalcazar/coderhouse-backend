class IPayment {

    constructor() {

    }

    pay(amount) {
        throw new Error('pay() must be implemented!');
    }
}

module.exports = IPayment;