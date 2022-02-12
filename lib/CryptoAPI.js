const axios = require('axios');
const colors = require('colors');

class CryptoAPI{
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }

    async getPriceData(coinOption , curOption){
        try{

            // formating currency
            const formatter = new Intl.NumberFormat('en-US',{
                style : 'currency',
                currency : curOption
            });


            const res= await axios({
                url : `${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`,
                method : 'GET'
            });

            let output = '';

            res.data.forEach(coin => {
                output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format(coin.price).green} | Rank: ${coin.rank.blue}\n`;
            });

            return output;
        }catch(err){
            console.log(err);
        }
    }
}
module.exports = CryptoAPI;