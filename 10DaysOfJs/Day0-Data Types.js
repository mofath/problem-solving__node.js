/**
   JavaScript's Data Types: 7 
    1 - Number
    2 - String
    3 - Boolean
    4 - Symbol
    5 - Null
    6 - Undefined
    7 - Object
 */


const secondInteger = 12,
    secondDecimal = 4.32,
    secondString = "is the best place to learn and practice coding!";

const performOperation = (secondInteger, secondDecimal, secondString) => {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';

    secondInteger = +secondInteger;
    console.log(firstInteger + secondInteger);

    secondDecimal = +secondDecimal;
    console.log(firstDecimal + secondDecimal);
    
    console.log(firstString + secondString);

};

performOperation(secondInteger, secondDecimal, secondString);