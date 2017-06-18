function kingDjoser(base, increment) {
    base = Number(base);
    increment = Number(increment);

    let iterations = base;

    let marbleCount = 0;
    let stoneCount = 0;
    let lapisCount = 0;
    let totalHeight = 0;

    for (let i = 1; i <= iterations; i++) {
        if (iterations % 2 == 0){
            if (base == 2) break;
        }
        else {
            if (base == 1) break;
        }

        if (i % 5 == 0) {
            lapisCount += (base*4-4)*increment;
            stoneCount += ((base-2)*(base-2))*increment;
            base -= 2;
            totalHeight += increment;
            continue;
        }

        stoneCount += ((base-2)*(base-2))*increment;
        marbleCount += (base*4-4)*increment;

        base -= 2;
        totalHeight += increment;

    }
    
    console.log(`Stone required: ${Math.ceil(stoneCount)}`);
    console.log(`Marble required: ${Math.ceil(marbleCount)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisCount)}`);
    (base % 2 == 0) ? console.log(`Gold required: ${Math.ceil(4*increment)}`) : console.log(`Gold required: ${Math.ceil(1*increment)}`);
    console.log(`Final pyramid height: ${Math.floor(totalHeight+increment)}`);

}

kingDjoser('11', '0.75');