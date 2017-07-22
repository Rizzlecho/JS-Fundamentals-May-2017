function result() {
    let argumentTypes = {};

    for (let i = 0; i < arguments.length; i++) {
        let argumentValue = arguments[i];
        console.log(`${typeof argumentValue}: ${argumentValue}`);
        
        if (!argumentTypes.hasOwnProperty(typeof argumentValue)) {
            argumentTypes[typeof argumentValue] = 0;
        }
        argumentTypes[typeof argumentValue]++;
    }

    let sortedArray = [];

    for (let argumentType in argumentTypes) {
        if (argumentTypes.hasOwnProperty(argumentType)) {
            let value = argumentTypes[argumentType];
            sortedArray.push([argumentType, value]);
        }
    }

    sortedArray = sortedArray.sort((a,b) => {
        return b[1] - a[1];
    });

    for (let i = 0; i < sortedArray.length; i++) {
        let element = sortedArray[i];
        let argumentType = element[0];
        let argumentCount = element[1];

        console.log(`${argumentType} = ${argumentCount}`);
    }
}

result('cat', 42, function () { console.log('Hello world!'); });