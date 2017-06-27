function systemComponents(strArr) {
    let componentsMap = new Map();

    for (let row of strArr) {
        let [systemName, componentName, subcomponentName] = row.split(" | ");

        if (!componentsMap.has(systemName)) {
            componentsMap.set(systemName, new Map);
        }

        if (!componentsMap.get(systemName).has(componentName)) {
            componentsMap.get(systemName).set(componentName, []);
        }

        let current = componentsMap.get(systemName).get(componentName);
        current.push(subcomponentName);
        componentsMap.get(systemName).set(componentName, current);
    }

    [...componentsMap].sort((a, b) => mySort(a, b)).forEach(([key, value]) => {
        console.log(key);
        [...value].sort(function (a, b) {
            let length1 = a[1].length;
            let length2 = b[1].length;

            return length2 - length1;
        }).forEach(([component, subcomponents]) => {
            console.log('|||' + component);
            for (let components of subcomponents) {
                console.log('||||||' + components);
            }
        });
    });


    function mySort(a, b) {
        let key1 = a[0];
        let key2 = b[0];

        let value1 = a[1];
        let value2 = b[1];

        value1 = [...value1].length;
        value2 = [...value2].length;

        if (value1 > value2) return -1;
        if (value2 > value1) return 1;
        if (key1 > key2) return 1;
        if (key2 > key1) return -1;

        return 0;
    }
}

systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submission Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])


// let sortedInitials = [...componentsMap].sort((a, b) => {
//     if (a !== b) {
//         return -1;
//     }
//     else if (a > b) {
//         return 1;
//     }
//     else return 0;
// });
//
//
// for (let [sysName, compName] of sortedInitials) {
//     console.log(`${sysName}`);
//     for (let [compoName, subComp] of compName) {
//         console.log(`|||${compoName}`);
//         for (let [sub, empty] of subComp) {
//             console.log(`||||||${sub}`);
//         }
//     }
// }
