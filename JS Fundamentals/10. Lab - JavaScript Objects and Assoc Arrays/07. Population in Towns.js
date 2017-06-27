function populationInTowns(input) {
    let townsCollector = new Map;

    for (let dataRow of input) {
        let [key, population] = dataRow.split(' <-> ');
        population = Number(population);
        if (townsCollector.has(key)) {
            townsCollector.set(key, townsCollector.get(key) + population);
        } else townsCollector.set(key, population);
    }

    for (let [key, population] of townsCollector) {
        console.log(key + ' : ' + population);
    }
}

populationInTowns([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);