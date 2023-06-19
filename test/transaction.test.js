const Transaction = require('../src/transaction')

describe ('Transaction', () => {
  it('should construct with an amount and a date', () => {
    const trans = new Transaction(1500)
    expect(trans.amount).toEqual(1500)
    expect(trans.date).toEqual('19-06-2023')
    // this test may break as it relies on the 
    // current actual date
  })
})