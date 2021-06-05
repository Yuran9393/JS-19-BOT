'use strict';
let isNumber = function(n){
    return !isNaN(parseFloat(n) && isFinite(n));
};

function guessNumber(){
const randomNum = 27;

   function chcheckingIf(){
    let num = prompt('Угадай число от 1 до 100');
    
    if ( randomNum === +num ) {
        alert('Поздравляю, Вы угадали!!!');
    } else if ( num > randomNum ){
        alert('Загаданное число меньше');
        return chcheckingIf();
    } else if ( num === null ){
        alert('Игра окончена');
    } else if ( !isNumber(num) ){
        alert('Введи число!');
        return chcheckingIf();
    } else if ( num === null ){
        alert('Игра окончена');
    } else if ( num < randomNum ){
        alert('Загаданное число больше');
        return chcheckingIf();
    } 
    }
    return chcheckingIf();
}
guessNumber();