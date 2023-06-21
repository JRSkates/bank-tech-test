const Account = require('../../src/account');

describe('Integration', () => {
    it('should print out a statement', () => {
      const mockDate1 = new Date('2023-06-18T12:00:00Z');
      jest.spyOn(global, 'Date').mockImplementationOnce(() => mockDate1);
  
      const acc = new Account();
      acc.deposit(1500);
  
      const mockDate2 = new Date('2023-06-19T12:00:00Z');
      jest.spyOn(global, 'Date').mockImplementationOnce(() => mockDate2);
  
      acc.withdraw(500);
  
      const consoleSpy = jest.spyOn(console, 'log');
      acc.printStatement();
  
      const expectedOutput = "date || credit || debit || balance\n19-06-2023 || || 500.00 || 1000.00\n18-06-2023 || 1500.00 || || 1500.00\n";
      expect(consoleSpy.mock.calls[0][0]).toEqual(expectedOutput);
  
      consoleSpy.mockRestore();
      global.Date.mockRestore();
    });
  });