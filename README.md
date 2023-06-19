# Bank Tech Test

Technical Test for Makers

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit || debit  || balance
14/01/2023 ||        || 500.00 || 2500.00
13/01/2023 || 2000.00||       || 3000.00
10/01/2023 || 1000.00||       || 1000.00
```

### How to Use

- Fork the codebase
- Run:
```
npm install

```

- then naviagate to the src folder and run main.js
```
cd ./bank-tech-test/src
node main.js

```

### Example Usage

```
➜  ~ git:(main) ✗ cd Documents/bank-tech-test/src
➜  src git:(main) node main.js
Welcome to the banking app!
> account.deposit(1000)
undefined
> account.withdraw(200)
undefined
> account.deposit(400)
undefined
> account.withdraw(800)
undefined
> account.printStatement()
date || credit || debit || balance
19-06-2023 || || 800.00 || 400.00
19-06-2023 || 400.00 || || 1200.00
19-06-2023 || || 200.00 || 800.00
19-06-2023 || 1000.00 || || 1000.00
>
```

### Test Coverage
```
➜  bank-tech-test git:(main) ✗ jest --coverage
 PASS  test/account.test.js
  ● Console

    console.log
      date || credit || debit || balance
      19-06-2023 || || 500.00 || 1000.00
      19-06-2023 || 1500.00 || || 1500.00

      at console.<anonymous> (node_modules/jest-mock/build/index.js:709:23)

 PASS  test/transaction.test.js
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |     100 |      100 |     100 |     100 |                   
 account.js     |     100 |      100 |     100 |     100 |                   
 transaction.js |     100 |      100 |     100 |     100 |                   
----------------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.218 s, estimated 1 s
Ran all test suites.
```

### My Approach

- I started with a simple planning session, picking apart the syntax within the breif to identify where each element might fit
- I settled on two classes: Transaction and Account. 
- The first of these deals with the actual inputs, so whether that be a Deposit or Withdrawal it will still need an amount and a date
- Account allows you to deposit and withdraw these Transaction objects. It handles that logic and stores them so all of these transactions can be called back with the printStatment() method - formatted to match the brief.
- The applicaiton is run from a third file: main.js. Within there we have a simple function which welcomes the user and allows them to interact with the application in a REPL
- All these classes were test driven and I have managed to get 100% coverage - I didn play around with some test for main.js however there were no meaningful tests I could get working without causing issues around the test suite not exiting

### Code elements of note

- I added two empty constructors within each Transaction object: type and currentBalance. This means when they are passed into the Account object we can conditionally update these elements to help us: identity what type of transaction it is, Deposit or Withdrawal, and to keep a running total of the overall balance at the time of that particular transaction
- For the date element of the transaction I created a function called formatDate which takes a new Date object and formats it properly. This means users do not need to worry about manually entering the date, it will simply use the inbuilt JS Date object to that that info
- I added a conditonal to withdraw on the Account class that does not let the user withdraw more money then they have in their account.
- The printStatement method formats each transaction saved within the transactions array, using the transaction.type as a conditional - as the formatting is different for a Deposit and a Withdrawl. They are all concatenated with a line break and console.logged