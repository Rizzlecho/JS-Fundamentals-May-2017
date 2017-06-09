function lowestPricesInCities(strArr) {
    let summary = new Map;

    for (let row of strArr) {
        let [townName, productName, productPrice] = row.split(' | ');
        productPrice = Number(productPrice);

        if (!summary.has(productName)) {
            summary.set(productName, new Map);
        }

        if (!summary.get(productName).has(townName)) {
            summary.get(productName).set(townName, productPrice);
        }
        else {
            summary.delete(townName);
            summary.get(productName).set(townName, productPrice);
        }
    }


    for (let [productName, insideMap] of summary) {
        let minPrice = Number.MAX_SAFE_INTEGER;
        let townWithLowestPrice = '';

        for (let [townName, productPrice] of insideMap) {
            if (Number(productPrice) < minPrice) {
                minPrice = productPrice;
                townWithLowestPrice = townName;
            }
        }
        console.log(`${productName} -> ${minPrice} (${townWithLowestPrice})`);
    }
}

lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
])