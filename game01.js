"use strict";
//Написать простой игровой бот

let random  = Math.floor(Math.random() * (100+1)) + 1;
console.log(random)
let input

while( (input= prompt("Введите число от 0 до 100:")) != random) {
  
  if (+input) {
    if (input > random ) {
      alert("Меньше!");
    }
    else if (input < random ) {
      alert("Больше!");
    }
    else if (input == random ) {
      alert("Правильно!");        
      break;
    }
  } else { 
      alert("Введи число!");
    }
}
