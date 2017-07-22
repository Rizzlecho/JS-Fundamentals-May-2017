function aggregates(arr) {
    function reduce(arr, calcAggr) {
        let result = [0];
        for (let nextElement of arr.slice(1)) {
            result = calcAggr(result, nextElement);
        }
        return result;
    }

    console.log("Sum = " + reduce(arr, (a, b) => Number(a) + Number(b)));
    console.log("Min = " + reduce(arr, (a, b) => a < b ? a : b));
    console.log("Max = " + reduce(arr, (a, b) => a > b ? a : b));
    console.log("Product = " + reduce(arr, (a, b) => Number(a) * Number(b)));
    console.log("Join = " + reduce(arr, (a, b) => '' + a + b));

}

let arr = [5, -3, 20, 7, 0.5];
console.log(aggregates(arr));

