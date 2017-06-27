function spiceMustFlow(strArr) {
    let startingYield = strArr.map(Number);
    let spiceExtracted = 0;
    let days = 0;


    while (startingYield >= 100) {
        spiceExtracted += startingYield - 26;
        startingYield -= 10;
        days++;
    }

    if (spiceExtracted < 26) {}
    else spiceExtracted = spiceExtracted - 26;


    console.log(days);
    console.log(spiceExtracted);
}

spiceMustFlow(['111']);