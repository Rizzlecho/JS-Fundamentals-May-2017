function templateFormat(input) {

    let opening = `<?xml version="1.0" encoding="UTF-8"?>\n<quiz>`;
    let closing = `</quiz>`;

    console.log(opening);

    for (let i = 0; i < input.length; i+=2) {
        let q = input[i];
        let a = input[i + 1];
        console.log(`<question>`);
        console.log(q);
        console.log(`</question>`);

        console.log(`<answer>`);
        console.log(a);
        console.log(`</answer>`);
    }

    console.log(closing);

}

templateFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]

);