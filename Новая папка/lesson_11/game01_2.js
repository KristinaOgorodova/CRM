'use strict'

const gameNum = Math.floor(Math.random() * 100) + 1;
    console.log("Загаданное число: ", gameNum);
    
const guess = () => {
    let userNumber = ' ';
    userNumber = +prompt('Введите число');
    if (userNumber === 0) {
        alert('Игра окончена');
        return;
    } else {
        if (Number.isNaN(userNumber)) {
            alert('Введи число');
        };
        if (userNumber > gameNum) {
            alert('Меньше!');
        };
        if (userNumber < gameNum) {
            alert('Больше!');
        };
        if (userNumber === gameNum) {
            alert('Правильно');
        };
    }
    return guess()
}; 

guess();




