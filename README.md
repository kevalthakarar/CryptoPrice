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
<pre>Coin: <font color="#C4A000">BTC</font> (Bitcoin) | Price: <font color="#4E9A06">₹3,165,202.42</font> | Rank: <font color="#3465A4">1</font>
Coin: <font color="#C4A000">ETH</font> (Ethereum) | Price: <font color="#4E9A06">₹215,444.17</font> | Rank: <font color="#3465A4">2</font></pre>

<b>command -       coindex check price --coin=BTC,ETH,USDT,BNB,DOGE,MATIC --cur=USD </b> &emsp;&emsp;&emsp;&emsp;

<b>ANS : </b><br>

<pre>Coin: <font color="#C4A000">BTC</font> (Bitcoin) | Price: <font color="#4E9A06">$42,000.64</font> | Rank: <font color="#3465A4">1</font>
Coin: <font color="#C4A000">ETH</font> (Ethereum) | Price: <font color="#4E9A06">$2,858.23</font> | Rank: <font color="#3465A4">2</font>
Coin: <font color="#C4A000">USDT</font> (Tether) | Price: <font color="#4E9A06">$1.00</font> | Rank: <font color="#3465A4">3</font>
Coin: <font color="#C4A000">BNB</font> (Binance Coin) | Price: <font color="#4E9A06">$393.25</font> | Rank: <font color="#3465A4">4</font>
Coin: <font color="#C4A000">DOGE</font> (Dogecoin) | Price: <font color="#4E9A06">$0.15</font> | Rank: <font color="#3465A4">12</font>
Coin: <font color="#C4A000">MATIC</font> (Polygon) | Price: <font color="#4E9A06">$1.63</font> | Rank: <font color="#3465A4">16</font>
</pre>
