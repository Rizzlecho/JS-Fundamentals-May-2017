function distance([x1, y1, z1, x2, y2, z2]) {
    let result = Math.sqrt((Math.pow(x2 - x1, 2)) + (Math.pow(y2 - y1, 2)) + (Math.pow(z2 - z1, 2)));

    console.log(result);
}
distance([1, 1, 0, 5, 4, 0]);