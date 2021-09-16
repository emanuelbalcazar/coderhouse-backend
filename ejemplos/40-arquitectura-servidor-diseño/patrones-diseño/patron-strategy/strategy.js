class StrategyManager {

    constructor() {
        this.strategy = null;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    pay(amount) {
        return this.strategy.pay(amount);
    }
}

module.exports = StrategyManager;