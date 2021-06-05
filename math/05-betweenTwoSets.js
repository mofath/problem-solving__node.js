const a = [2, 4], b = [16, 32, 96]; //3
// const a = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91], b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //0


// O(n log(n)) function.
const getTotalX = (a, b) => {
    // 1. find the LCM of all the integers of array A.
    // 2. find the GCD of all the integers of array B.
    // 3. Count the number of multiples of LCM that evenly divides the GCD.

    let lcmOfA = a[0];
    let gcdOfB = b[0];
    let count = 0;
    
    const gcd = (a, b) => {
        if (a === 0) return b;
        return gcd(b % a, a)
    }

    for (let i = 0; i < a.length; i++)
        lcmOfA = (a[i] * lcmOfA) / gcd(a[i], lcmOfA);


    for (let i = 0; i < b.length; i++) {
        gcdOfB = gcd(b[i], gcdOfB);
        if (gcdOfB == 1) gcdOfB = 1;
    }

    for (let i = lcmOfA, j = 2; i <= gcdOfB; i = lcmOfA * j, j++) {
        if (gcdOfB % i === 0)
            count++;
    }

    return count;
}

console.log(getTotalX(a, b));