function printNthElement(input) {

    let opr = Number(input.pop());
    let result = [];

    for (let i = 0; i < input.length; i+= opr) {
        result.push(input[i]);
    }
    console.log(result.join('\n'));
}

// printEveryNEl([5,20,31, 4,20,2]);
printNthElement([5,20,31, 4,20,'2']);