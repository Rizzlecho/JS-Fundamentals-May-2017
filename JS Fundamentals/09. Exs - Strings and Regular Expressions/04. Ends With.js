function endsWith(strings, ending) {
        return ending === strings.substring(strings.length-ending.length, strings.length);
}

console.log(endsWith('This sentence ends with fun?', 'fun?'));