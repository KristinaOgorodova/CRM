'use strict'

const calculate = (totalSum, basketAmount, promo) => {
    let total = totalSum;

    let finalCost = 0;

    const itemAmountDiscount = (qty) => {
        if (qty > 10) {
            return finalCost = (total - (total / 100 * 3));
        }
    }

    console.log(itemAmountDiscount(basketAmount));

    const sumDiscount = (sum) => {
        if (sum > 30000) {
            return (finalCost - ((sum - 30000) / 100 * 15));
        }
    }

    console.log(sumDiscount(totalSum));

    const promoCode = (code) => {
        if (code === 'METHED') {
            return finalCost- (total / 100 * 10);
        }
    }

    console.log(promoCode(promo));

   const promoCode2 = (str) => {
       if (str === 'G3H2Z1' && finalCost > 2000) {
           return finalCost - 500;
       }
    };

    console.log(promoCode2('G3H2Z1'));


};


console.log(calculate(35000,12, 'METHED'));