function janNotation(inputArr) {
    let numbersArr = [];
    let result = 0;
    let operationsArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (parseInt(inputArr[i])) {
            numbersArr.push(inputArr[i]);
        }
        else {
            operationsArr.push(inputArr[i]);
        }

        if (inputArr[i] === '+') {
            if (numbersArr.length < 2) {
                console.log('Error: not enough operands!');
                continue;
            }
            let n1 = numbersArr.pop();
            let n2 = numbersArr.pop();
            result = n2 + n1;

            numbersArr.push(result);
        }

        if (inputArr[i] === '-') {
            if (numbersArr.length < 2) {
                console.log('Error: not enough operands!');
                break;
            }
            let n1 = numbersArr.pop();
            let n2 = numbersArr.pop();
            result = n2 - n1;

            numbersArr.push(result);
        }

        if (inputArr[i] === '*') {
            if (numbersArr.length < 2) {
                console.log('Error: not enough operands!');
                break;
            }
            let n1 = numbersArr.pop();
            let n2 = numbersArr.pop();
            result = n2 * n1;

            numbersArr.push(result);
        }

        if (inputArr[i] === '/') {
            if (numbersArr.length < 2) {
                console.log('Error: not enough operands!');
                break;
            }
            let n1 = numbersArr.pop();
            let n2 = numbersArr.pop();
            result = n2 / n1;

            numbersArr.push(result);
        }

    }

    if (numbersArr.length > operationsArr.length) {
        console.log('Error: too many operands!');
    }
     else console.log(result);
}

janNotation(
    [15,'/']

);


// if (parseInt(inputArr[i])) {
//     numbersArr.push(inputArr[i]);
// }
// else {
//     operationsArr.push(inputArr[i]);
// }


// if (inputArr[i] === '+') {
//     result = inputArr[i-1] + inputArr[i-2];
// }
//
// if (inputArr[i] === '*') {
//     result = inputArr[i-1] * inputArr[i-2];
// }
//
// if (inputArr[i] === '-') {
//     result = inputArr[i-1] - inputArr[i-2];
// }
//
// if (inputArr[i] === '/') {
//     result = inputArr[i-1] / inputArr[i-2];
// }