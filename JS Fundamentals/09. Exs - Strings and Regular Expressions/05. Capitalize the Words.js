function capitalizeWords(input) {
    let lowered = input.toLowerCase().split(' ');
    let result = [];
    let resultAll = [];

    result.push(lowered);

    for (let word of lowered) {
        resultAll.push(word[0].toUpperCase() + word.substring(1,word.length));
    }

    console.log(resultAll.join(' '));

}

capitalizeWords('Was that Easy? tRY thIs onE for SiZe!');