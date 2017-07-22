class Point{
    constructor (x,y){
        this.hiks = x;
        this.y = y;
    }

    static distance(obj1, obj2){
        const dx = obj1.hiks - obj2.hiks;
        const dy = obj1.y - obj2.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));


