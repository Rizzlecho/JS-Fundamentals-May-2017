function convert(num) {
    let resultDegrees = (num % 400) * 0.9;
    let endResult = 0;

    if(resultDegrees < 0) {
        endResult = 360 - Math.abs(resultDegrees);
    }
    else {
        endResult = resultDegrees;
    }
    console.log(endResult);
}

convert(-50);