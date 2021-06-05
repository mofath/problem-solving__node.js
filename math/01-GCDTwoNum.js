// GCD: Greatest common factor

/** Facts :
    IF a % n = 0 & b % n = 0, 
    THEN (a+b) % n = 0 & (a -b) % n = 0 
    AS (a+b) % n = (a*n + b*n) % n = 0

    Ex. gcd(45, 10) = gcd(35, 5) = gcd(25, 0) = 5

    **Note:
    a = 2^3 * 7^6
    b = 2^5 * 7^2

    - To get GCD, we need min of powers of 2 and min of power of 7
    => GCD = 2^min(3, 5) * 7^min(6, 2)
*/

// const a = 10, b = 5; // 5
const a = 0, b = 1500; // 3:

// iterative
const gcd_1 = (a, b) => {
    if (a === 0) return b;

    while (a) {
        const temp = a;
        a = b % a;
        b = temp;
    }

    return b;
};


const gcd_2 = (a, b) => {
    if (a == 0) return b;

    while (a) {
        if (a < b) a = a - b;
        else b = b - a;
    }

    return b;
};

const gcd_3 = (a, b) => {
    let gcd = 0;

    const min = Math.min(a, b);
    const iterations = min !== 0 ? min : Math.max(a, b)

    for (let i = 1; i <= iterations; i++) {
        // check if is factor of both integers
        if (a % i == 0 && b % i == 0)
            gcd = i;
    }

    return gcd;
}


// recursion
const gcd_4 = (a, b) => {
    if (a == 0) return b;
    return gcd_4(b % a, a);
};


console.log(gcd_1(a, b));
console.log(gcd_2(a, b));
console.log(gcd_3(a, b));
console.log(gcd_4(a, b));