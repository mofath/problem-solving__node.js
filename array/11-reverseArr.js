const array = [1, 2, 5, 15, 20];


// using `reverse` built in function
const reverseArr_1 = (arr) => {
   const reversedArr = [...arr];

   return reversedArr.reverse();
}

// using `push` built in function
const reverseArr_2 = (arr) => {
   const reversedArr = [];

   arr.map((_, index) =>
      reversedArr.push(arr[arr.length - 1 - index])
   );

   return reversedArr
}

// using `unshift` built in function
const reverseArr_3 = (arr) => {
   const reversedArr = [];

   arr.map((val) => {
      reversedArr.unshift(val)
   });

   return reversedArr;
};


// using formula
const reverseArr_4 = (arr) => {
   return arr.map((_, index) => arr[(arr.length - 1 - index) % arr.length]);
};


// reverse array in place
const reverseArr_5 = (arr) => {
   let max = arr.length - 1;

   for (let i = 0; i < max / 2; i++) {
      const temp = arr[i];
      arr[i] = arr[max - i];
      arr[max - i] = temp;
   }

   return arr;
};


console.log(reverseArr_1(array));
console.log(reverseArr_2(array));
console.log(reverseArr_3(array));
console.log(reverseArr_4(array));
console.log(reverseArr_5(array));

