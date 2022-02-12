# CryptoPrice

Command line in nodejs to check the price of CryptCurrnecy in any currency format

Steps TO Follow - 

1. git clone and npm install all package
2. running npm link command

Now terminal can identify coindex 
for checking coindex -V   // for version
coindex -h                // for help

Setting key for API
coindex key set       // setting nomics API key
coindex key show      // Show API key
coindex key remove    // for removing API key


Fetch Price of CryptoCurrency

coindex check price --coin=BTC,ETH --cur=INR      // add any crypto and currency format
ans: 
Coin: BTC (Bitcoin) | Price: ₹3,207,563.57 | Rank: 1
Coin: ETH (Ethereum) | Price: ₹222,628.44 | Rank: 2

coindex check price --coin=BTC,ETH --cur=USD
Coin: BTC (Bitcoin) | Price: $42,415.91 | Rank: 1
Coin: ETH (Ethereum) | Price: $2,943.61 | Rank: 2
