function extrIncrSub(input) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= biggestNum){
            biggestNum = input[i];
            result.push(biggestNum);
        }
    }
    
    console.log(result.join('\n'));
}

extrIncrSub([1,3,8,4,10,12,3,2,24]);