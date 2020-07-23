//Example by: jcyktor: https://github.com/jcyktor
//https://github.com/jennifert/JavaScript-Demos/commit/6a31265eb18ecc78f2db18e1f283cfac8667b3d7#diff-b29cb358d6528934f426332e9c4d5480

const ticker = 'goog'; // change this to search other stocks
const url = `https://api.iextrading.com/1.0/stock/${ticker}/price`;

fetch(url)
  .then(resp => resp.json())
  .then(resp => console.log(`${ticker} price: `, resp))
  .catch(err => console.log('Error: ', err));
