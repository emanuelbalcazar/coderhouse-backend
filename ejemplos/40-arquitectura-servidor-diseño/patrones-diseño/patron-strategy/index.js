const StrategyManager = require('./strategy');
const context = new StrategyManager();

// con que otro patron de diseño lo puedo combinar?
const credit = require('./strategies/credit');
const debit = require('./strategies/debit');
const money = require('./strategies/money');

context.setStrategy(credit);
context.pay(400);

context.setStrategy(debit);
context.pay(1300);

context.setStrategy(money);
context.pay(893);
