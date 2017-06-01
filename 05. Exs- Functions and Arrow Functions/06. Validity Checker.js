function validityChecker(input) {
    [x1, y1, x2, y2] = input;

    let formulaOne = Math.sqrt((x1 - 0) ** 2 + (y1 - 0) ** 2);
    let formulaSecond = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2);
    let formulaThird = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    if (formulaOne == Math.ceil(formulaOne)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (formulaSecond == Math.ceil(formulaSecond)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (formulaThird == Math.ceil(formulaThird)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}