function solve(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let all = [];
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split('|');
        let ticket = new Ticket(tokens[0], Number(tokens[1]), tokens[2]);
        all.push(ticket);
    }

    let newArr = all.sort(function (a, b) {
        if (criteria === 'price') {
            return a[criteria] - b[criteria];
        } else {
            return a[criteria].localeCompare(b[criteria]);
        }
    });
    return newArr;

}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'], 'destination'));


