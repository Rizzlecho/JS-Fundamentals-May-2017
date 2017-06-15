function autoCompany(strArr) {
    let overall = new Map();

    for (let row of strArr) {
        let [carBrand, carModel, productedCars] = row.split(" | ");
        productedCars = Number(productedCars);

        if (!overall.has(carBrand)) {
            overall.set(carBrand, new Map);
        }

        if (!overall.get(carBrand).has(carModel)) {
            overall.get(carBrand).set(carModel,0);
        }

        let oldProducted = overall.get(carBrand).get(carModel);
        overall.get(carBrand).set(carModel,productedCars + oldProducted);
    }

    for (let [carBr, carMod] of overall) {
        console.log(`${carBr}`);
        for (let [carModel, producted] of carMod) {
            console.log(`###${carModel} -> ${producted}`);
        }
    }
}

autoCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])