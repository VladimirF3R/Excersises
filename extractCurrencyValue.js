function extractCurrencyValue(str) {
  return +str.slice(1);
}

let str = prompt("enter string");
console.log(extractCurrencyValue(str));