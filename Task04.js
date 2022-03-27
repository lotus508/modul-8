"use strict";
//Четвертая задача:
//Необходимо написать функцию, которая принимает 2 параметра n и m
//И возвращает массив с високосными годами в диапазоне между n и m

const mas = [];

function generate(n, m) {
  var i;
  for (i = n; i < m + 1; i++) {
    const number = Math.floor(Math.random() * (m - n)) + n;
    if (number % 4 == 0) {
      mas.push(number);
    } 
  } 
}

generate(1990, 2020);
console.log(mas)
