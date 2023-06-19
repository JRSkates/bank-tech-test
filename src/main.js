const Account = require('./account');

const account = new Account();

const startApp = () => {
  console.log('Welcome to the banking app!');
  require('repl').start('> ').context.account = account;
}

startApp();