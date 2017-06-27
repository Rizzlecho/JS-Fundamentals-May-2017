function wordOccurences(sentence, word) {
    let initialString = sentence.split(' ');

    let pattern = `\\b${word}\\b`;
    let regex = new RegExp(pattern, 'gi');

    let count = 0;

    for (let obj of initialString) {
        while(match = regex.exec(obj)){
            count++;
        }
    }
    console.log(count);

}
wordOccurences('How do you plan on achieving that? How? How can you even think of that?', 'how');