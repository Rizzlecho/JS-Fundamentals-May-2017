function lastDay(numArr) {
    let [day, month, year] = numArr;
    let date = new Date(year, month - 1, 0);

    return date.getDate();
}

console.log(lastDay([17, 3, 2002]));
