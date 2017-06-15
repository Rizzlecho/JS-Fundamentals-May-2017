function buildWall(strArr) {
    strArr = strArr.map(Number);
    let dailyConcrete = 0;
    let concreteUsed = [];
    let buildOn = false;

    while (!buildOn) {
        buildOn = true;
        dailyConcrete = 0;
        for (let i = 0; i < strArr.length; i++) {
            if (strArr[i] < 30) {
                strArr[i]++;
                dailyConcrete += 195;
                buildOn = false;
            }
        }

        if (!buildOn) {
            concreteUsed.push(dailyConcrete);
        }
    }
    console.log(concreteUsed.join(', '));
    let totalCost = concreteUsed.reduce((a,b)=> a+b);
    console.log(totalCost*1900 + ' pesos');
    
}

buildWall([21, 25, 28]);