'use strict'

const calculate = (totalSum, basketAmount, promo) => {
    let total = totalSum;

    if (basketAmount > 10) {
        total -= total / 100 * 3;
    }

    if (totalSum > 30000) {
        total -= (totalSum - 30000) / 100 * 15;
    }

    if (promo) {
        if (promo === 'METHED') {
            total -= total / 100 * 10;
        }

        if (promo === 'G3H2Z1' && total > 2000) {
            total -= 500;
        }
    }
    return total;
}


console.log(calculate(35000,12, 'METHED'));