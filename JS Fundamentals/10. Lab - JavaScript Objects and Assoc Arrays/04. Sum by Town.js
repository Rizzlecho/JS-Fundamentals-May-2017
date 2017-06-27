function sumTowns(strArr) {
    let towns = {};
    
    for (let i = 0; i < strArr.length; i+=2) {
        let name = strArr[i];
        let value = Number(strArr[i+1]);
        if (!towns.hasOwnProperty(name)) {
            towns[name] = 0;
        }
        towns[name] += value;
    }
    
    console.log(JSON.stringify(towns));
}

sumTowns(['Sofia',
    20,
    'Varna',
    3,
    'Sofia',
    5,
    'Varna',
    4
]);