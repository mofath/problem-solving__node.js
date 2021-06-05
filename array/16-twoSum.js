const array = [2, 5, 3, 7], target = 5;

// T(n) = O(n2)
// S(n) = O(1)
const twoSum_1 = (arr, target) => {
    let res = [];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                res = [i, j]
            }
        }
    }

    return res;
};


// T(n) = O(n)
// S(n) = O(n)
const twoSum_2 = (arr, target) => {
    let objArr = {};
    let slowPtr = 0;
    let fastPtr = 0;


    while(slowPtr < arr.length) {
        
    }

    

};


console.log(twoSum_1(array, target));
console.log(twoSum_2(array, target));