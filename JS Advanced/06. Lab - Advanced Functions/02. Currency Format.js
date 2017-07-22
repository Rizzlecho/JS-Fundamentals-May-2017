function formatCurrency(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);

    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function getDollarFormatter(formatter) {
    return function (value) {
        return formatter(',', '$', true, value);
    }
}
//
// function getEuroFormatter(formatter) {
//     return function (value) {
//         return formatter(',', 'e', false, value);
//     }
// }

let dollars = getDollarFormatter(formatCurrency);
// let euro = getEuroFormatter(formatCurrency);
console.log(dollars(5346));
// console.log(euro(213));
