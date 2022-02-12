const program = require('commander');
const check = require('../commands/check');

program
    .command('price')
    .description('Check price of coin')
    .option('--coin <type>' , 'Enter the crypto name to get the price' , 'BTC,ETH,USDT,BNB,USDC')
    .option('--cur <currency>' , 'change the currency' , 'INR')
    .action((cmd)=> check.price(cmd));

program.parse(process.argv);