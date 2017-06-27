function reduce(arr, calcAggr) {
    let result = [0];
    for (let nextElement of arr.slice(1)) {
        result = calcAggr(result, nextElement);
    }
    return result;
}

function calcAggr(arr) {
    console.log("Sum = " + reduce(arr,(a,b) => Number(a) + Number(b)));
    console.log("Min = " + reduce(arr,(a,b) => Math.min(a,b)));
    console.log("Max = " + reduce(arr,(a,b) => a > b ? a : b));
    console.log("Sum = " + reduce(arr,(a,b) => Number(a) * Number(b)));
    console.log("Join = " + reduce(arr,(a,b) => '' + a + b));
}

console.log(calcAggr([0, 2, 3, 10, 5]));


// console.log(reduce([5, 10, 20], (a, b) => a + b));