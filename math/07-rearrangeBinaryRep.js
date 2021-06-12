/*
Imagine you have a list of integer numbers, and you should rearrange them in ascending order based on the ones' count in their binary representation.

[Input Format]
elements - Number[] - list of numbers

[Output Format]
Number[] - sorted list of numbers.

[Example]
Input: [5,3,7,10]
Output: [3,5,10,7]

[Explanation]
5:  its binary representation is (0b101), count of ones is 2
3:  its binary representation is (0b011), count of ones is 2
7:  its binary representation is (0b111), count of ones is 3
10: its binary representation is (ob1010), count of ones is 2

N.B: when numbers are qual in the ones' count, then you should reorder them ascendingly based on their decimal values.

so the final list should be: [3,5,10,7]

*/

const elements = [5, 3, 7, 10]
// Output: [3,5,10,7]

function dec2Bin(dec) {
    if (dec >= 0) {
        return dec.toString(2);
    }
    else {
        /* Here you could represent the number in 2s compliment but this is not what 
           JS uses as its not sure how many bits are in your number range. There are 
           some suggestions https://stackoverflow.com/questions/10936600/javascript-decimal-to-binary-64-bit 
        */
        return (~dec).toString(2);
    }
}

/**
 * 
 * @param {Number[]} elements 
 */
function rearrange(elements) {
    const numObj = {};

    elements.forEach(el => {
        const binRep = Number(el).toString(2);
        `${binRep}`.split("").forEach((num) => {
            if (num == 1) {
                if (el in numObj) numObj[el]++;
                else numObj[el] = 1;
            }
        });
    })

    return Object.keys(numObj).sort((a, b) => (numObj[a]) - numObj[b])
}

console.log(rearrange(elements));