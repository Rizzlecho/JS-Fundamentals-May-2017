function split(input) {

    let regex = input.split(/[\s.();,]+/);
    let result = [];
    for (let obj of regex) {
        result.push(obj.trim());
    }
    console.log(result.join('\n').trim());

}
split('let sum = 4 * 4,b = "wow";');