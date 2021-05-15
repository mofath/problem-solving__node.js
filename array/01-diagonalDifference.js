const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9,]
];

const diagonalDifference = (arr) => {
    let len = arr.length -1;
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i <= len; i++) {
        primaryDiagonal += arr[i][i];
        secondaryDiagonal += arr[len - i][i]
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);
}

console.log(diagonalDifference(matrix));
