const n = 7,
    m = 19,
    s = 2;


const saveThePrisoner = (n, m, s) => {
    // n: the number of prisoners
    // m: the number of sweets
    // s: the chair number to start passing out treats at

    const reminder = (m + s - 1) % n;
    return reminder || n;
}


console.log(saveThePrisoner(n, m, s));