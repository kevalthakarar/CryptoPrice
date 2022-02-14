# CryptoPrice

<h3>Command line in nodejs to check the price of CryptCurrnecy in any currency format</h3><br>

<h4>Steps TO Follow - </h4><br>

1. git clone and npm install all package<br>
2. running npm link command<br>

<b>Now terminal can identify coindex </b><br>
1. coindex -V &emsp;&emsp;&emsp;&emsp; for version <br>
2. coindex -h &emsp;&emsp;&emsp;&emsp; for help<br>

<b>Setting key for API</b><br>
1. coindex key set &emsp;&emsp;&emsp;&emsp; setting nomics API key
2. coindex key show &emsp;&emsp;&emsp;&emsp; Show API key
3. coindex key remove &emsp;&emsp;&emsp;&emsp; for removing API key

<h3>Fetch Price of CryptoCurrency</h3><br>

<b>command  -  coindex check price --coin=BTC,ETH --cur=INR </b> &emsp;&emsp;&emsp;&emsp;     // add any crypto and currency format<br>

<b>ANS : </b><br>
Coin: BTC (Bitcoin) | Price: ₹3,207,563.57 | Rank: 1 <br>
Coin: ETH (Ethereum) | Price: ₹222,628.44 | Rank: 2 <br>

<b>command -       coindex check price --coin=BTC,ETH --cur=USD </b> &emsp;&emsp;&emsp;&emsp;

<b>ANS : </b><br>

Coin: BTC (Bitcoin) | Price: $42,415.91 | Rank: 1 <br>
Coin: ETH (Ethereum) | Price: $2,943.61 | Rank: 2 <br>
