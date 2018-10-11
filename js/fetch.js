const ticker = 'goog'; // change this to search other stocks
const url = `https://api.iextrading.com/1.0/stock/${ticker}/price`;

fetch(url)
  .then(resp => resp.json())
  .then(resp => console.log(`${ticker} price: `, resp))
  .catch(err => console.log('Error: ', err));
