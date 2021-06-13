/**
Implement a function to compress words, and it has a customizable level of compression.

[Input Format]
word: string - a word to compress.
k: number - it defines the compression level. 
This means the count of consecutive occurrence of any character should not be greater than or equal to 'k'. 
otherwise, you should remove that repetitive sequence from the word completely.

[Output Format]
string - the word after compression.

[Example]
word =  'kdabbcccbaaddk'
k = 3

Output = 'kk'

[Explanation]
Iteration #1
compressed word = 'kdabbbaaddk'

Iteration #2
compressed word = 'kdaaaddk'

Iteration #3
compressed word = 'kdddk'

Iteration #4
compressed word = 'kk'

*/

const word = 'kdabbcccbaaddk';
const k = 3;

/**
 * 
 * @param {String} word 
 * @param {Number} k 
 */
function compressWord(word, k) {

    let occurObj = {}

    const countOcc = (word) => {

        const charArr = word.split("");
        let counter = 0;

        for (let i = 0; i < charArr.length - 1; i++) {

            if (charArr[i] === charArr[i + 1]) {
                counter++;
                occurObj[charArr[i]] = counter;
            } else {
                counter = 1;
            };

        };
    };


    const compress = (word) => {

        countOcc(word);

        for (char in occurObj) {

            if (occurObj[char] >= k) {
                const re = new RegExp(`${char}`, "g");
                word = word.replace(re, "");
                occurObj = {};
                return compress(word);
            };

        };

        return word;
    };

    return compress(word);
}


console.log(compressWord(word, k));