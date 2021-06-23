/**
 * check if number first digit is not 1, 2, 3, 5, 6, 8
 * check if number first two digits are not in 45, 70, 71, 72, 74, 75, 77, 79, 90, 91, 98, 99
 */

const num = 1568456; // valid
// const num = 705568; // valid
// const num = 738849 // not valid

function validate(value) {
    const nif = typeof value === 'string' ? value : value.toString();

    const validationSets = {
        one: ['1', '2', '3', '5', '6', '8'],
        two: ['45', '70', '71', '72', '74', '75', '77', '79', '90', '91', '98', '99']
    };

    if (!validationSets.one.includes(nif.substr(0, 1)) && !validationSets.two.includes(nif.substr(0, 2))) {
        return "valid";
    };

    return "not valid"
}

function mo(value) {
    return /^[0-9]{4}\-[0-9]{3}$/.test(value);
};

console.log(validate(num));