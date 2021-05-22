const arr = [1, 2, 3],
    n = 2,
    queries = [0, 1, 2];  //[2, 3, 1]

// a[n]: the array to rotate
// queries[1]: the indices to report




const circularArrayRotation_1 = (arr, n, queries) => {
    let rotatedArr = [];

    const prefix = (arr.length - (n % arr.length)) % arr.length;

    rotatedArr = arr.map((_, index) => arr[(prefix + index) % arr.length]);

    return queries.map((el) => rotatedArr[queries[el]]);
};



const circularArrayRotation_2 = (arr, n, queries) => {
    const prefix = (arr.length - (n % arr.length)) % arr.length;

    return queries.map((el) => arr[(prefix + el) % arr.length]);
};



console.log(circularArrayRotation_1(arr, n, queries));
console.log(circularArrayRotation_2(arr, n, queries));