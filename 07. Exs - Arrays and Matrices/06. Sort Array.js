function sortArray(input) {

    let sortLen = 0;
    for (let i = 0; i < input.length; i++) {
        sortLen = input.sort((textA, textB) => (textA < textB) ? -1 : (textA > textB) ? 1 : 0)
            .sort((w1, w2) => w1.length > w2.length);

    }

    console.log(sortLen.join('\n'));
}

sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);