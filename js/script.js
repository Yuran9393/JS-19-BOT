'use strict';
let isNumber = function(n){
    return !isNaN(parseFloat(n) && isFinite(n));
};

function guessNumber(){

let num = prompt('Угадай число от 1 до 100');

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

   function chcheckingIf(){
    if ( randomInteger(1,100) === +num ) {
        alert('Поздравляю, Вы угадали!!!');
    } else if ( num > 100 ){
        alert('Загаданное число меньше');
        return guessNumber();
    } else if ( num === null ){
        alert('Игра окончена');
    } else if ( !isNumber(num) ){
        alert('Введи число!');
        return guessNumber();
    } else if ( num === null ){
        alert('Игра окончена');
    } else if ( num < 1 ){
        alert('Загаданное число больше');
        return guessNumber();
    } 
    }
    return chcheckingIf();
}
guessNumber();