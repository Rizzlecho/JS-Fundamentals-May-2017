function uniqueWords(strArr) {
    let unique = new Set();

    let text = strArr.join('\n').split(/\W+/)
        .filter(e => e != '')
        .map(e => e.toLowerCase())
        .forEach(e => unique.add(e));

    console.log([...unique].join(', '));
}