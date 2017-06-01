function triangle(n) {
    let row = 1;
    for (let i = 1; i <= n; i++) {
        console.log('$'.repeat(row));
        row++;
    }
}

triangle(3)