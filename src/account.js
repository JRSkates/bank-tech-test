const Transaction = require('./transaction')

class Account {
  constructor(balance, transactions) {
    this.balance = 0
    this.transactions = []
  }

  deposit(amount) {
    this.balance += amount
    const transaction = new Transaction(amount)
    transaction.type = 'Deposit'
    transaction.currentBalance += this.balance
    this.transactions.push(transaction)
  }

  withdraw(amount) {
    if(this.balance - amount < 0) {
      return 'Insufficient funds'
    } else {
      this.balance -= amount
      const transaction = new Transaction(amount)
      transaction.type = 'Withdrawal'
      transaction.currentBalance += this.balance
      this.transactions.push(transaction)
    }
  }

  printStatement() {
    let statement = `date || credit || debit || balance\n`;

    for (let i = this.transactions.length - 1; i >= 0; i--) {
      let transaction = this.transactions[i];
      let currentBalanceFloat = (transaction.currentBalance).toFixed(2)
      if (transaction.type === 'Deposit') {
        statement += `${transaction.date} || ${transaction.amount} || || ${currentBalanceFloat}\n`
      } else {
        statement += `${transaction.date} || || ${transaction.amount} || ${currentBalanceFloat}\n`
      }
    }
    console.log(statement)
  }
};

module.exports = Account;