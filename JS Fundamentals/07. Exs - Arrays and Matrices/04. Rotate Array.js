function rotateArray(input) {
    let opr = Number(input.pop());

    for (let i = 0; i < opr % input.length; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}

rotateArray(['1','2','3','4','2']);