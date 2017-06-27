function imperialUnits(input) {
    let feet = Math.floor(input / 12);
    let inch = input % 12;
    console.log(feet+"'-"+ inch+ "\"");
}

imperialUnits(55);