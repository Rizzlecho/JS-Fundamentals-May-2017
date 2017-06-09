function findVariableNames(input) {
    let result = [];
    let regex = /\b_[a-zA-Z0-9]+\b/g;
    let array = input.match(regex);

    for (let i = 0; i < array.length; i++) {
        result.push(array[i].substring(1,array[i].length))
    }

    console.log(result.join(','));
}

findVariableNames('The _id and _age variables are both integers.');