function extractLinks(input) {
    let arr = [];
    let pattern = /[w]{3}\.[a-zA-Z0-9-]+\.[a-z]+(\.[a-z]+)*/g;

    for (let i = 0; i < input.length; i++) {
        arr.push(input[i]);
    }

    for (let obj of arr) {
        let match = obj.match(pattern);
        if (match !== null){
            console.log(match.join(' '));
        }
    }
}

extractLinks(['Join WebStars now for free, at www.web-stars.com',
'You can also support our partners:',
'Internet - www.internet.com',
'WebSpiders - www.webspiders101.com',
'Sentinel - www.sentinel.-ko',
]);