class Transaction {
  constructor(amount) {
    this.amount = amount;
    this.date = this.formatDate(new Date());
    this.type = ''
    this.currentBalance = 0
  }

  formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${day}-${month}-${year}`;
  }
}

module.exports = Transaction;