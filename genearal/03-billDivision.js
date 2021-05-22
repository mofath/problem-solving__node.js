const bill = [3, 10, 2, 9],
    k = 1,
    b = 7;


// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

const bonAppetit = (bill, k, b) => {
    const totalBill = bill.reduce((acc, cur) => acc + cur, 0);
    const sharedItemsBill = totalBill - bill[k];

    const res = b > (sharedItemsBill / 2) ? b - (sharedItemsBill / 2) : "Bon Appetit";
    
    console.log(res);
}


console.log(bonAppetit(bill, k, b));