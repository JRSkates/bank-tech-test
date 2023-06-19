// const Account = require('../src/account');
// const repl = require('repl');

// jest.mock('repl', () => {
//   const originalRepl = jest.requireActual('repl');
//   return {
//     ...originalRepl,
//     start: jest.fn().mockReturnValue({ context: {} }),
//   };
// });

// describe('Main', () => {
//   let startMock;

//   beforeAll(() => {
//     const account = new Account();
//     startMock = repl.start;
//     require('../src/main');
//   });

//   afterAll(() => {
//     startMock.mockRestore();
//   });

//   it('should create an instance of Account and make it accessible in REPL', () => {
//     expect(startMock).toHaveBeenCalledWith({ prompt: '> ', context: expect.any(Object), eval: expect.any(Function) });
//   });
// });