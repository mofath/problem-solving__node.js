// const array = [4, 2, 5, 1, 6, 3]; // false
const array = [4, 2, 5, 1, 4, 3]; // true

// T(n) = O(nlogn)
// S(n) = O(1)
const containsDuplicate_1 = (arr) => {
    4
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) return true

    }

    return false;
};



// T(n) = O(n)
// S(n) = O(1)
const containsDuplicate_2 = (arr) => {
    const set = [...new Set(arr)]

    return !(set.length === arr.length);
};


console.log(containsDuplicate_1(array));
console.log(containsDuplicate_2(array));