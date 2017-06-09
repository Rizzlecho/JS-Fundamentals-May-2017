function secretData(string) {
    let namesRegex = /\*[A-Z][A-Za-z]*(?=\s|$)/g;
    let phoneRegex = /\+[0-9-]{10}(?=\s|$)/g;
    let idRegex = /![a-zA-Z0-9]+(?=\s|$)/g;
    let baseRegex = /_[a-zA-Z0-9]+(?=\s|$)/g;

    string.forEach(line => {
        line = line.replace(namesRegex, counter);
        line = line.replace(phoneRegex, counter);
        line = line.replace(idRegex, counter);
        line = line.replace(baseRegex, counter);
        console.log(line);
    });
    function counter(match) {
        return '|'.repeat(match.length);
    }

}

secretData(['Agent *Ivankov was in the room when it all happened.', 'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21', 'I think it was +555-49-796']);
