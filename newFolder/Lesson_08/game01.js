'use strict'

const guessNumber = () => {
    const gameNum = Math.floor(Math.random() * 100) + 1;
    console.log("Загаданное число: ", gameNum);
    let userNumber = ' ';

    while (gameNum !== userNumber) {
        userNumber = +prompt('Введите число');
        if (userNumber === 0) {
            alert('Игра окончена');
            return;
        } else if (Number.isNaN(userNumber)) {
            alert('Введи число');
        } else if (userNumber > gameNum) {
            alert('Меньше!');
        } else if (userNumber < gameNum) {
            alert('Больше!');
        } else if (userNumber === gameNum) {
            alert('Правильно');
        }
    }
}

guessNumber();



