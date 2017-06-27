function drawFigure(n) {
    let length = n % 2 === 0 ? n - 1 : n;
    let count = n - 2;
    let middle = Math.ceil(length / 2);

    for (let i = 0; i < length; i++) {
        if (i === 0 || i === length - 1 || i === middle - 1) {
            console.log(`+${'-'.repeat(count)}+${'-'.repeat(count)}+`);
        }
        else {
            console.log(`|${' '.repeat(count)}|${' '.repeat(count)}|`);
        }
    }
}
drawFigure(5);