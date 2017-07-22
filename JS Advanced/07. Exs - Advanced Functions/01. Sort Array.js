function sortArray(array, orderType) {
    if (orderType === 'asc') {
        return array.sort((a,b) => {
            return a-b;
        });
    }
    else {
        return array.sort((a,b) => {
            return b-a;
        });
    }
}

sortArray([14, 7, 17, 6, 8], 'asc');