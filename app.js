
var bitcoin = document.getElementById("bitcoin");
var ethereum = document.getElementById("ethereum");
var dogecoin = document.getElementById("dogecoin");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2C%20ethereum%2C%20dogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function(response){
    bitcoin.innerHTML = response.bitcoin.usd;
    ethereum.innerHTML = response.ethereum.usd;
    dogecoin.innerHTML = response.dogecoin.usd;
    // console.log(response);
});