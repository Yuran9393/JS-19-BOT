'use strict';
let isNumber = function(n){
    return !isNaN(parseFloat(n) && isFinite(n));
};

function guessNumber(){
const randomNum = 27;

   function checkingIf(){
    let num = prompt('Угадай число от 1 до 100');
    
    if ( num === null ){
        alert('Игра окончена');
    } else if ( !isNumber(num) ){
        alert('Введи число!');
        return checkingIf();
    } else if ( num < randomNum ){
        alert('Загаданное число больше');
        return checkingIf();
    } else if ( num > randomNum ){
        alert('Загаданное число меньше');
        return checkingIf();
    } else if ( randomNum === +num ) {
        alert('Поздравляю, Вы угадали!!!');
    }
}
    return checkingIf();
}
guessNumber();