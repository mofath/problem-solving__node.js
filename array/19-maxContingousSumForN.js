const array = [1, 2, 3, 4, -5, 6, -3], k = 2;

const maxContingousSumForN_1 = (arr, k) => {
    let startWind = 0, maxSum = 0, curWindowSum = 0;
    let endWind = startWind + k - 1;

    for (let i = 0; i < k; i++) maxSum += arr[i];

    curWindowSum = maxSum;

    while (endWind < arr.length - 1) {

        curWindowSum = curWindowSum + arr[endWind + 1] - Math.abs(arr[startWind]);

        maxSum = Math.max(maxSum, curWindowSum);

        startWind++;
        endWind++;
    }

    return maxSum;
}


function maxSubArraySum(a, size) {
    let max_so_far = a[0];
    let curr_max = a[0];

    for (let i = 1; i < size; i++) {
        curr_max = Math.max(a[i], curr_max + a[i]);
        max_so_far = Math.max(max_so_far, curr_max);
    }

    return max_so_far;
}

console.log(maxContingousSumForN_1(array, k));