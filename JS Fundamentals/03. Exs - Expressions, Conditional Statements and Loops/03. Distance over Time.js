function distanceOverTime(input) {
    let v1 = input[0];
    let v2 = input[1];
    let t = input[2];

    let S1 = v1 * (t/3.6);
    let S2 = v2 * (t/3.6);
    let delta = Math.abs(S1-S2);
    console.log(delta);
}

console.log(distanceOverTime(0, 60, 3600));