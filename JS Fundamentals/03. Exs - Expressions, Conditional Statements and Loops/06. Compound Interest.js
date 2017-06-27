function compoundInterest([P, i, n, t]) {
    let interest = i / 100;
    let compoundPeriod = 12 / n;

    let result = P * (Math.pow(1+(interest/compoundPeriod),compoundPeriod*t));
    console.log(result.toFixed(2));
}

compoundInterest(1500, 4.3, 3, 6);
