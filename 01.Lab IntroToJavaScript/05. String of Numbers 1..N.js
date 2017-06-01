function concat(n) {
    let max = Number(n);
    let result = '';

    for (let i=1; i <= max; i++){
        result+=i;
    }

    return result;
}

console.log(concat('11'));