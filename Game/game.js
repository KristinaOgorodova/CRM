'use strict';

(() => {
const FIGURES = ['камень', 'ножницы', 'бумага'];

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
};

const game = () => {
    const result = {
        player: 0,
        computer: 0,
    };

    return function start () {
        let computer = FIGURES[getRandomIntInclusive(0, 2)];
        console.log(computer);
        let userAnswer = ' ';
        userAnswer = prompt('Напишите Ваш ответ: камень, ножницы, бумага');
        if  (computer === 'камень' && userAnswer === "бумага") {
            result.player++;
            alert(`
            Вы выиграли!
            Computer: ${result.computer}.
            Вы: ${result.player}`);
            
        } if (computer === 'камень' && userAnswer === "ножницы") {
            result.computer++;
            alert(`
            Вы проиграли!
            Computer: ${result.computer}.
            Вы: ${result.player}`);
            
        } if (computer === 'бумага' && userAnswer === "ножницы") {
            result.player++;
            alert(`
            Вы выиграли!
            Computer: ${result.computer}.
            Вы: ${result.player}`);
            
        } if (computer === 'бумага' && userAnswer === "камень") {
            result.computer++;
            alert(`
            Вы проиграли!
            Computer: ${result.computer}.
            Вы: ${result.player}`);
            
        } if (computer === 'ножницы' && userAnswer === "камень") {
            result.player++;
            alert(`
            Вы выиграли!
            Computer: ${result.computer}.
            Вы: ${result.player}`);
            
        } if (computer === 'ножницы' && userAnswer === "бумага") {
            result.computer++;
            alert(`
            Вы проиграли!
            Computer: ${result.computer}.
            Вы: ${result.player}`);
            
        } if (userAnswer === computer) {
            result.player++;
            result.computer++;
            alert(
            `Ничья!
            Computer: ${result.computer}.
            Вы: ${result.player}`);
        } 
        if (confirm('Еще?')&& result.player > 3 || result.computer > 3) {
            start();   
        } else {
            alert('Игра закончилась!')   
            return;
        }
        
    }
}
window.rps = game;
})();

