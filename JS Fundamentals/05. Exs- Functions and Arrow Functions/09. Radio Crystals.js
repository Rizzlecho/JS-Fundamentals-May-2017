function radioCrystals(input) {
    let target = input[0];

    for (let i = 1; i < input.length; i++) {
        let chunk = input[i];

        console.log(`Processing chunk ${chunk} microns`);

        let cut = 0;
        while (Math.floor(chunk / 4) >= target || Math.floor(chunk / 4) === target - 1) {
            chunk /= 4;
            cut++;
        }

        if (cut > 0) {
            console.log(`Cut x${cut}`);
            console.log('Transporting and washing')
        }

        let lap = 0;
        while ((chunk - (chunk * 0.2)) >= target || (chunk - (chunk * 0.2)) === target - 1) {
            chunk = chunk - (chunk * 0.2);
            lap++;
        }

        if (lap > 0) {
            console.info(`Lap x${lap}`);
            console.log('Transporting and washing');
        }

        let grind = 0;
        while (chunk - 20 >= target || chunk - 20 === target - 1) {
            chunk -= 20;
            grind++;
        }

        if (grind > 0) {
            console.info(`Grind x${grind}`);
            console.log('Transporting and washing');
        }

        let etch = 0;
        while (chunk - 2 >= target || chunk - 2 === target - 1) {
            chunk -= 2;
            etch++;
        }

        if (etch > 0) {
            console.info(`Etch x${etch}`);
            console.log('Transporting and washing');
        }

        if (chunk === target - 1) {
            console.log('X-ray x1');
        }

        console.log(`Finished crystal ${target} microns`)
    }
}

radioCrystals([1375, 50000]);