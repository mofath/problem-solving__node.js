
const array = [ 2, 4, 6, 8, 16 ]; //2

const gcd = (a, b) => {
    if (a == 0) return b;
    return gcd(b % a, a);
}

// Time Complexity: O(N * log(M)), where M is the smallest element of the array
// Auxiliary Space: O(1)
const gcdArr = (arr) => {
    let acc = arr[0];

    for (let i = 1; i < arr.length; i++) {
        acc = gcd(arr[i], acc);

        if (acc == 1) return 1;
    }

    return acc;
}

console.log(gcdArr(array));