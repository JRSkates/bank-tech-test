const Account = require('./account');

const account = new Account();

console.log('Welcome to the banking app!');

// Start the Node REPL
require('repl').start('> ').context.account = account;