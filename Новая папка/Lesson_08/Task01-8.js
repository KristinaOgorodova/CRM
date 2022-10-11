'use strict'

const rendomNumbers = (num) => {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(Math.round(0 - 0.5 + Math.random()* (100 - 0 + 1)))
    }
    return arr;
}

console.log(rendomNumbers(10));