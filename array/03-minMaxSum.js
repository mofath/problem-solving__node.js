const array = [1, 3, 5, 7, 9];

const minMaxSum_1 = (arr) => {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
        if (max < arr[i]) max = arr[i];
        sum += arr[i]
    }

    return console.log(sum - max, sum - min);
};


const minMaxSum_2 = (arr) => {
    arr = arr.sort((a,b) => a - b);

    let maxSet = arr.slice(1);
    let minSet = arr.slice(0, -1);
    
    var maxSum = maxSet.reduce((a, b) => a + b, 0);
    var minSum = minSet.reduce((a, b) => a + b, 0);
    
    return console.log(minSum, maxSum);
};

console.log(minMaxSum_1(array));
console.log(minMaxSum_2(array));

