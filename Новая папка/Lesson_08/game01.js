'use strict'

const gameNum = Math.floor(Math.random() * 100) + 1;
console.log(gameNum)

let personNum = Number(prompt('Угадай число от 0 до 100:',0));


    if (personNum > gameNum) {
        alert('Меньше!');
       // Number(prompt('Введите новый вариант: '));
    }
    if (personNum < gameNum) {
        alert('Больше!');
        //Number(prompt('Введите новый вариант: '));
    }
    if (gameNum === personNum) {
        alert('Правильно!');
    }
    if (!Number.isNaN(personNum)) {
        prompt('Введите число:');
    };



