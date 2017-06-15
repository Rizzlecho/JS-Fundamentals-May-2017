function storeCatalogue(strArr) {
    let summary = new Map();

    for (let row of strArr) {
        let [productName, productPrice] = row.split(" : ");

        productPrice = Number(productPrice);

        let category = row[0];

        if (!summary.has(category)) {
            summary.set(category, new Map);
        }

        if (!summary.get(category).has(productName)) {
            summary.get(category).set(productName,productPrice);
        }
    }

    let sortedInitials = [...summary].sort();

    for (let [category, values] of sortedInitials) {
        console.log(`${category}`);
        let sortedProducts = [...values].sort();

        for (let [names,value] of sortedProducts) {
            console.log(`  ${names}: ${value}`);
        }
    }
}

storeCatalogue([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
])