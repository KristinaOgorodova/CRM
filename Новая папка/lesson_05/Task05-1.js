'use strict'

const math = () => {
    for (let i = 1; i <= 10; i++) {
        console.log('-------');
        for (let y = 1; y <=10; y++) {
            console.log(`${i} в ${y} степени = ${i**y}`)
        }
    }
}

math();