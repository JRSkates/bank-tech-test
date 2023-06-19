const Account = require('../src/account');

describe ('Account', () => {
  it('should construct with a balance of 0 and an empte transactions array', () => {
    const acc = new Account
    expect(acc.balance).toEqual(0)
    expect(acc.transactions).toEqual([])
  });
});