function daggersSwords(strArr) {
    let html = `<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>\n`;

    let numbers = strArr.map(Number);

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Math.floor(numbers[i]);
        let bladeType = '';
        let application = '';

        if (numbers[i] <= 10) {

        }
        else {
            if (numbers[i] <= 40) {
                bladeType = 'dagger';
            }
            else {
                bladeType = 'sword';
            }
            let lastDigit = numbers[i] % 10;

            switch (lastDigit) {
                case 1:
                case 6:
                    application = 'blade';
                    break;
                case 2:
                case 7:
                    application = 'quite a blade';
                    break;
                case 3:
                case 8:
                    application = 'pants-scraper';
                    break;
                case 4:
                case 9:
                    application = 'frog-butcher';
                    break;
                case 5:
                case 0:
                    application = '*rap-poker';
                    break;
            }
            html += `<tr><td>${numbers[i]}</td><td>${bladeType}</td><td>${application}</td></tr>\n`
        }
    }

    html += '</tbody>\n';
    html += '</table>';

    console.log(html);
}

daggersSwords([
    '17.8',
    '19.4',
    '13',
    '55.8',
    '126.96541651',
    '3'
]);