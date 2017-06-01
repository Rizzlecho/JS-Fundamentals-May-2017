function rounding([num, precision]) {
    let denominator = Math.pow(10, precision);
    console.log(Math.round(num*denominator)/denominator);
}

rounding([3.1415926535897932384626433832795, 2]);