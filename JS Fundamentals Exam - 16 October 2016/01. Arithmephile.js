function arithmephile(input) {
    input = input.map(Number);
    let max = -Infinity;

    while (input.length > 0) {
        let count = input.shift();
        if (count >= 10 || count < 0) {
            continue;
        }
        let sum = 1;

        for (let i = 0; i < count; i++) {
            sum *= input[i];
        }
        if (sum > max) {
            max = sum;
        }
    }

    console.log(max);
}

arithmephile([
'10',
'20',
'2',
'30',
'44',
'3',
'56',
'20',
'24'
]);