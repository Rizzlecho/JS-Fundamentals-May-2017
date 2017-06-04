function magicMatrices(arr) {
    let sum = 0;
    let newSum = 0;

    for (let row = 0; row < 1; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            sum += arr[row][col];
        }
    }

    for (let row = 1; row < arr.length; row++) {
        newSum = 0;
        for (let col = 0; col < arr[row].length; col++) {
            newSum += arr[row][col];
        }
        if (sum !== newSum) {
            return false;
        }
    }

    for (let col = 0; col < arr[0].length; col++) {
        newSum = 0;
        for (let row = 0; row < arr.length; row++) {
            newSum += arr[row][col];
        }
        if (sum !== newSum) {
            return false;
        }
    }
    return true;


}

console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));
