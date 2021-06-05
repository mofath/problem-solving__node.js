const array = [2, 7, 3, 9, 4]; //252

const gcd = (a, b) => {
    if (a == 0) return b;
    return gcd(b % a, a);
}


const lcmArr = (arr) => {
    let acc = arr[0];

    for (let i = 1; i < arr.length; i++)
        acc = (arr[i] * acc) / gcd(arr[i], acc);

    return acc;
}

console.log(lcmArr(array));