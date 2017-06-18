function usernames(array) {
    let names = new Set();
    for (let arr of array) {
        names.add(arr);
    }

    console.log([...names].sort(sortAlphabeticaly).join('\n'));

    function sortAlphabeticaly(a,b) {
        let firstCriteria=a.length-b.length;
        if(firstCriteria!==0){
            return firstCriteria;
        }else{
            return a.localeCompare(b);
        }
    }
}

usernames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);