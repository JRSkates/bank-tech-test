const Account = require('../src/account');

describe ('Account', () => {
  it('should construct with a balance of 0 and an empte transactions array', () => {
    const acc = new Account;
    expect(acc.balance).toEqual(0);
    expect(acc.transactions).toEqual([]);
  });

  it('should allow you to deposit', () => {
    const acc = new Account;
    acc.deposit(1500);
    expect(acc.balance).toEqual(1500);
    //console.log(acc.transactions);
    expect(acc.transactions.length).toEqual(1);
  });

  it('should not allow you to withdraw if you have no balance', () => {
    const acc = new Account;
    expect(acc.withdraw(1000)).toEqual("Insufficient funds");
  });

  it('should allow you to withdraw', () => {
    const acc = new Account;
    acc.deposit(1500);
    acc.withdraw(500);
    expect(acc.balance).toEqual(1000)
    //console.log(acc.transactions);
    expect(acc.transactions.length).toEqual(2);
  });

  it('should print out a statement', () => {
    const acc = new Account;
    acc.deposit(1500);
    acc.withdraw(500);
    console.log(acc.printStatement());
    let result = "date || credit || debit || balance\n19-06-2023 || || 500 || 1000\n19-06-2023 || 1500 || || 1500\n"
    expect(acc.printStatement()).toEqual(result);
  })
});