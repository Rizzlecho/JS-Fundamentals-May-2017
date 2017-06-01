function evenPosElement(input) {
    let sum = [];
    for (let i = 0; i < input.length; i+=2) {
        sum+=(input[i])+ ' ';
    }

    console.log(sum);

}

evenPosElement(['20', '30', 40]);