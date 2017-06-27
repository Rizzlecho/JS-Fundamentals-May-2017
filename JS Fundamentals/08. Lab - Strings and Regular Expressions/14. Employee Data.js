function employeeData(input) {
    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;

    for (let obj of input) {
        let match = pattern.exec(obj);
        if (match) {
            console.log((`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`));
        }
    }
}

employeeData(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee',
]);