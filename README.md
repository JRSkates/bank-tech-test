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
'date || credit || debit || balance\n' +
  '19-06-2023 || || 800.00 || 400.00\n' +
  '19-06-2023 || 400.00 || || 1200.00\n' +
  '19-06-2023 || || 200.00 || 800.00\n' +
  '19-06-2023 || 1000.00 || || 1000.00\n'
>
```