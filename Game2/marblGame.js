'use strict';

(() => {
  const getRandomEvenOrOddNumber = () => {
    let str;
    const ran = Math.round(Math.random());
    if (ran === 0) {
      return str = 'even';
    } else {
      return str = 'odd';
    }
  };

  const game = () => {
    const result = {
      player: 5,
      bot: 5,
    };

    return function start() {
      const computer = getRandomEvenOrOddNumber();
      let userAnswer = 0;
      userAnswer = +prompt('Введите количество шариков от 1 до 5: ');
      console.log(computer);
      console.log(userAnswer);
      if (userAnswer > result.player || userAnswer < 0) {
        alert(`Введите другое число`);
        return start();
      }

      if (userAnswer % 2 === 0 || computer === 'even') {
        result.bot += userAnswer;
        result.player -= userAnswer;
        alert(`Результат: У Вас:${result.player} , у Бота: ${result.bot}`);
      } else if (userAnswer % 2 !== 0 || computer === 'odd') {
        result.bot -= userAnswer;
        result.player += userAnswer;
        alert(`Результат: У Вас: ${result.player} , у Бота: ${result.bot}`);
      }

      let newGame = false;
      if (result.bot <= 0) {
        newGame = confirm(`Вы выиграли! Сыграем еще?`);
      } else if (result.player <= 0) {
        newGame = confirm(`Вы проиграли! Сыграем еще?`);
      } else {
        start();
      }

      if (!newGame) {
        alert(`Игра окончена!У Вас: ${result.player} , у Бота: ${result.bot} `);
        return;
      } else {
        start();
      }
    };
  };
  window.marbl = game;
})();


