const array = [1, 3, 2, 6, 1, 2], k = 3; //5
// const array = [1, 2, 3, 4, 5, 6], k = 5; //3
// let array = [ 2, 2, 1, 7, 5, 3 ], k = 4; // 5


// T(n) = O(n2)
// S(n) = O(n)
const divisibleSumPairs_1 = (arr, k) => {
    let pairsCount = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) % k === 0) pairsCount++;
        }
    }

    return pairsCount;
};


const divisibleSumPairs_2 = (arr, k) => {
    // Create a frequency array to count
    // occurrences of all remainders when
    // divided by K
    let freq = new Array(k);
    freq.fill(0);

    // Count occurrences of all remainders
    for (let i = 0; i < arr.length; i++)  freq[arr[i] % k]++;

    // If both pairs are divisible by 'K'
    let sum = freq[0] * parseInt((freq[0] - 1) / 2, 10);

    // count for all i and (k-i)
    // freq pairs
    for (let i = 1; i <= k / 2 && i != (k - i); i++)
        sum += freq[i] * freq[k - i];


    // If K is even
    if (k % 2 == 0)
        sum += parseInt(freq[parseInt(k / 2, 10)] * (freq[parseInt(k / 2, 10)] - 1) / 2, 10);

    return sum;
};

// console.log(divisibleSumPairs_1(array, k));
console.log(divisibleSumPairs_2(array, k));