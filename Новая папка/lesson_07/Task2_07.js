'use strict'

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
    let sum = arr.reduce((total, amount) => {
        return total + amount; 
    });
    let average = Math.floor(sum / arr.length);
    return average;
}

console.log(getAverageValue(allCashbox));