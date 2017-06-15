function queryMess(array) {

    for (let line of array) {
        if (line.indexOf('?') > 0) {
            line = line.split('?')[1];
        }

        line = line.replace(/%20|\+/g, ' ');
        line = line.replace(/\s+/g, ' ');

        // console.log(line);

        let map = new Map();

        let kvp = line.split('&');

        for (let i = 0; i < kvp.length; i++) {
            let split = kvp[i].split('=');
            let key = split[0].trim();
            let value = split[1].trim();

            if (!map.has(key)) {
                map.set(key, []);
            }

            let current = map.get(key);
            current.push(value)

        }

        let result = '';
        [...map].forEach(([key,values]) => {
            result += (key + '=' + `[${values.join(', ')}]`)
        });
        console.log(result);
    }
}

queryMess([
'foo=%20foo&value=+val&foo+=5+%20+203',
'foo=poo%20&value=valley&dog=wow+',
'url=https://softuni.bg/trainings/coursesinstances/details/1070',
'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
]);