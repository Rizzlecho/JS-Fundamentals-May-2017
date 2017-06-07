function censorship(text, censor) {

    for (let censorWord of censor) {
        let replaced = '-'.repeat(censorWord.length);
        while (text.indexOf(censorWord) > -1){
            text = text.replace(censorWord,replaced);
        }
    }
    return text;
}

censorship('roses are red, violets are blue', [', violets are', 'red']);