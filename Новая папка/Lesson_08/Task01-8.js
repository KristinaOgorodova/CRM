'use strict'

const rendomNumbers = (num) => {
    let arr = [];
    arr.length = num;
    let rand = Math.round(0 - 0.5 + Math.random()* (100 - 0 + 1));
    console.log(rand)
    let newArr = arr.map((currentValue) => {
        Math.round(0 - 0.5 + Math.random()* (100 - 0 + 1));
    });

    return newArr;
}

console.log(rendomNumbers(5));