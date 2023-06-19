const Transaction = require('./transaction')

class Account {
  constructor(balance, transactions) {
    this.balance = 0
    this.transactions = []
  }
};

module.exports = Account;