const program = require('commander');
const key = require('../commands/key');


program
    .command('set')
    .description('Set api key for https://nomics.com/')
    .action(key.set);

program
    .command('remove')
    .description('remove api key for https://nomics.com/')
    .action(key.remove);

program
    .command('show')
    .description('Set api key for https://nomics.com/')
    .action(key.show);


program.parse(process.argv)