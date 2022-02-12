const KeyManager = require('../lib/KeyManager')
const CryptoAPI = require('../lib/CryptoAPI');

const check = {
    async price(cmd){
        try{
            const keyManager = new KeyManager();
            const key = keyManager.getKey();

            const api = new CryptoAPI(key);
            const pricedata = await api.getPriceData(cmd.coin , cmd.cur);

            console.log(pricedata);


        }catch(err){
            console.log(err);
        }
    }
}
module.exports = check;