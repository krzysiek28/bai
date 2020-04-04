const interval = setInterval(function () {
    this.fetchExchangeRate();
}, 5000);

function fetchExchangeRate() {
    return [this.getExchangeRate("EUR"), this.getExchangeRate("USD"), this.getExchangeRate("GBP")];
};

async function getExchangeRate(currency) {
    let xhr = new XMLHttpRequest();
    let baseUrl = "http://api.nbp.pl/api/exchangerates/rates/C/";
    xhr.open("GET", baseUrl + currency);
    xhr.send();
    console.log(baseUrl + currency);
    xhr.onreadystatechange = (e) => {
        let data = JSON.parse(xhr.responseText);
        this.addTableRow(data);
    };
};

function addTableRow(rate) {
    if(rate !== undefined) {
        let bid = document.getElementById(rate.code + "_bid");
        let ask = document.getElementById(rate.code + "_ask");
        let currency = document.getElementById(rate.code + "_currency");
        bid.innerText = rate.rates[0].bid;
        ask.innerText = rate.rates[0].ask;
        currency.innerText = rate.code;
    }
}
