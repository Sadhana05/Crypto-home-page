var btc=document.getElementById("bitcoin");
var eth=document.getElementById("ethereum");
var doge=document.getElementById("dogcoin");


var settings= {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cetherem%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "headers": { }
}
$.ajax(settings).done(function(response) {
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
});





















