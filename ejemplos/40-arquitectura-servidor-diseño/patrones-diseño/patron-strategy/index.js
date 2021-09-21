const StrategyManager = require('./strategy');
const context = new StrategyManager();

const factory = require('./strategies/factory');
const strategy = factory.getPaymentStrategy('debit')
// con que otro patron de diseño lo puedo combinar?
/* const credit = require('./strategies/credit');
const debit = require('./strategies/debit');
const money = require('./strategies/money'); */

context.setStrategy(strategy);
context.pay(400);

context.setStrategy(strategy);
context.pay(1300);

context.setStrategy(strategy);
context.pay(893);
