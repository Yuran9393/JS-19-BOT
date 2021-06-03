'use strict';
let isNumber = function(n){
    return !isNaN(parseFloat(n) && isFinite(n));
};

function guessNumber(){

let num = prompt('Угадай число от 1 до 100');

   function chcheckingIf(){
    if ( num > 100){
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
    } else {
        alert('Поздравляю, Вы угадали!!!');
    }
    }
    return chcheckingIf();
}
guessNumber();