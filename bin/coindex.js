#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');


program
    .version(pkg.version)
    .command('key' , 'https://p.nomics.com/cryptocurrency-bitcoin-api')
    .command('check' , 'Checking Price of CryptCurrency')
    .parse(process.argv);

