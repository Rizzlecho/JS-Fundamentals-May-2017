function cappyJuice(dataRows) {
    let flavorsObj = {};
    let bottlesObj = {};

    for (let dataRow of dataRows) {
        let [juiceName, quantity] = dataRow.split(/\s=>\s/g);
        quantity = Number(quantity);

        if (!flavorsObj.hasOwnProperty(juiceName)) {
            flavorsObj[juiceName] = quantity;
        }
        else {
            flavorsObj[juiceName] += quantity;
        }

        if (quantity >= 1000) {
            let bottlesCount = Math.floor(quantity) / 1000;
            if (!bottlesObj.hasOwnProperty(juiceName)) {
                bottlesObj[juiceName] = bottlesCount;
            }
            else {
                bottlesObj[juiceName] += bottlesCount;
            }
        }
    }

    for (let name in bottlesObj) {
        console.log(`${name} => ${bottlesObj[name]}`);
    }
}

cappyJuice([
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);