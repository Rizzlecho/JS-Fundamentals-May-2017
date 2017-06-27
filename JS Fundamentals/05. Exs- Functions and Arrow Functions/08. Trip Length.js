function tripLength([x1, y1, x2, y2, x3, y3]) {
    let distance1and2 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    let distance2and3 = Math.sqrt(Math.pow((x3 - x2), 2) + Math.pow((y3 - y2), 2));
    let distance1and3 = Math.sqrt(Math.pow((x3 - x1), 2) + Math.pow((y3 - y1), 2));

    if(distance1and2 <= distance1and3 && distance1and3 >= distance2and3){
        let a = distance1and2 + distance2and3;
        console.log('1->2->3: ' + a);
    }
    else if(distance1and2 <= distance2and3 && distance1and3 < distance2and3){
        let b = distance1and3 + distance1and2;
        console.log('2->1->3: '+ b);
    }
    else {
        let c = distance2and3 + distance1and3;
        console.log('1->3->2: ' + c);
    }
}

tripLength([-1, -2, 3.5, 0, 0, 2]);