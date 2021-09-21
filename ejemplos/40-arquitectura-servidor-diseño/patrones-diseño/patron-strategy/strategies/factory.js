class Factory {

    static getPaymentStrategy(type) {
        let method = require(`./${type}`);
        return method;
    }
}

module.exports = Factory;