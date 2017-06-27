function countWordsWithMap(input) {
    let words = input.join('\n').toLowerCase().split(/[^A-Za-z0-9_]/g).filter(x => x != '');

    let wordsCount = new Map;

    for (let word of words) {
        if (wordsCount.has(word)) {
            wordsCount.set(word,wordsCount.get(word)+1);
        }
        else wordsCount.set(word , 1);
    }

    let allWords = Array.from(wordsCount.keys()).sort();
    allWords.forEach(w => console.log(`'${w}' -> ${wordsCount.get(w)} times`));

}

console.log(countWordsWithMap(['JS devs use Node.js for server-side JS.-- JS for devs']));
