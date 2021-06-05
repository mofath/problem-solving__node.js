// const array = [2, 2, 1, 3, 2], d = 4, m = 2; //2
// const array = [1, 1, 1, 1, 1], d = 3, m = 2; //0
const array = [4], d = 4, m = 1; //1

const birthday = (arr, d, m) => {
    let startWind = 0, curWindowSum = 0, counter = 0;
    let endWind = m - 1;

    for (let i = 0; i < m; i++) curWindowSum += arr[i];

    while (endWind <= arr.length - 1) {

        if (curWindowSum === d) counter++;

        curWindowSum = curWindowSum + arr[endWind + 1] - arr[startWind];

        startWind++;
        endWind++;
    }

    return counter;
}

console.log(birthday(array, d, m));