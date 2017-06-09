function countWords(input) {
    let text = input.join('\n');
    let words = text.split(/[^A-Za-z0-9_]/g).filter(x => x!= '');

    let wordsCount = {};

    for (let word of words) {
        if (wordsCount[word]) {
            wordsCount[word]++;
        }
        else wordsCount[word] = 1;
    }

    return JSON.stringify(wordsCount);
}

console.log(countWords(['JS devs use Node.js for server-side JS.-- JS for devs']));
