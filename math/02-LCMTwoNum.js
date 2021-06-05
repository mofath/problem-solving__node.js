// LCM: Least common multiple

/** Facts :
    a = 2^3 * 7^6
    b = 2^5 * 7^2

    - To get GCD, we need min of powers of 2 and min of power of 7
    => GCD = 2^min(3, 5) * 7^min(6, 2)
    
    - To get GCD, we need max of powers of 2 and max of power of 7
    => LCM = 2^max(3, 5) * 7^max(6, 2)

    - Given a, b, GCD, how to get
    => a * b = 2^(3+5) * 7^(6+2)
    => GCD = 2^(3, 5) * 7^(6, 2)
    => LCM = a * b / GCD
*/


const a = 6, b = 8; // 24

const lcmTwoNum_1 = (a, b) => {
    let min = (a > b) ? a : b;

    while (true) {
        if (min % a == 0 && min % b == 0) return min;
        min++;
    }
}

const lcmTwoNum_2 = (a, b) => {

    const gcd = (a, b) => {
        if (a == 0) return b;
        return gcd(b % a, a);
    };
    
    return (a * b) / gcd(a, b);
}

console.log(lcmTwoNum_1(a, b));
console.log(lcmTwoNum_2(a, b));