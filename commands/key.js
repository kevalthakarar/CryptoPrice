const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager.js');

const key = {
    async set() {
        const keyManager= new KeyManager(); 
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API key '.green,
                validate : input => (input === ''? 'This value is required' : true)
            }
        ]);

        const key = keyManager.setKey(input.key);
        if(key){
            console.log('API Key set'.blue);
        }

    },
    show() {
        try{
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            console.log('API key =',key.yellow);
            return key;
        }catch(err){
            console.log(err.message.red)
        }
    },
    remove() {  
        try{
            const keyManager = new KeyManager();
            keyManager.deleteKey();
            console.log('API key removed'.blue);
            return;
        }catch(err){
            console.log(err.message.red)
        }
    }
}

module.exports = key;