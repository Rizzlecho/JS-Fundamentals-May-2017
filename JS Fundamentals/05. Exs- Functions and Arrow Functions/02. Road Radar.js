function getInfraction([speed, zone]) {
    let overSpeed = speed - getLimit(zone);
    if (overSpeed <= 0) {

    }
    else {
        if (overSpeed <= 20 && overSpeed >=1) console.log("speeding");
        else if (overSpeed <= 40) console.log("excessive speeding");
        else if (overSpeed > 40)  console.log("reckless driving");
    }
    function getLimit(zone) {
        switch (zone){
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }
}

getInfraction(21, 'residential');