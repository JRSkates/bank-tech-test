const Transaction = require('../../src/transaction')

describe ('Transaction', () => {
  it('should construct with an amount and a date', () => {
    // Mocking the Date object
    const originalDate = global.Date;
    global.Date = jest.fn(() => new originalDate('2023-06-18T12:00:00.000Z'));

    const trans = new Transaction(1500)
    //console.log(trans.amount);
    expect(trans.amount).toEqual("1500.00")
    expect(trans.date).toEqual('18-06-2023')

    // Restore the original Date object
    global.Date = originalDate;
  })
})