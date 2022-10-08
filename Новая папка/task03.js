'use strict'

const calculate = (totalSum, basketAmount, promo) => {
    let total = totalSum;

    const itemAmountDiscount = (qty) => {
        if (qty > 10) {
            return (total - (total / 100 * 3));
        }
    }

    console.log(itemAmountDiscount(basketAmount));

    const sumDiscount = (sum) => {
        if (sum > 30000) {
            return (sum - ((sum - 30000) / 100 * 15));
        }
    }

    console.log(sumDiscount(totalSum));

    const promoCode = (code) => {
        if (code === 'METHED') {
            return total - (total / 100 * 10);
        }
    }

    console.log(promoCode(promo));

   const promoCode2 = (str) => {
       if (str === 'G3H2Z1' && total > 2000) {
           return total - 500;
       }
    }
    console.log(promoCode2('G3H2Z1'));
}

console.log(calculate(35000,12, 'METHED'));