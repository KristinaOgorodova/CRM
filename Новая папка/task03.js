'use strict'

const calculate = (totalSum, basketAmount, promo) => {
    let total = 0;

    if (basketAmount > 10) {
        let discountOne = totalSum/100 * 3;
        total = totalSum - discountOne;
        console.log(total);
    } else if (totalSum > 30000) {
        let discountTwo = (totalSum-30000)/100 * 15;
        total = totalSum - discountTwo;
       console.log(total);
    } else if (promo === 'METHED') {
        let discountTree = totalSum/100 * 10;
        total = totalSum - discountTree;
        console.log(total);
    } else if (promo === 'G3H2Z1') {
        if ((total = totalSum - discountOne - discountTwo - discountTree) > 2000) {
            let discountFour = totalSum - 500;
        }
        return total;
    }
}

console.log(calculate(35000,12, 'METHED'));