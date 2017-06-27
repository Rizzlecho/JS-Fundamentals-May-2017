function diagonalSums(matrix) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    for (let row = 0; row < matrix.length; row++) {
        leftDiagonal += matrix[row][row];
        rightDiagonal += matrix[row][matrix.length - row - 1];
    }
    console.log(leftDiagonal + ' ' + rightDiagonal);
}
diagonalSums([[1, 2, 3], 
              [4, 5, 6], 
              [7, 8, 9]]);