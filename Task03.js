"use strict";
//Третья задача:
//Добавьте 4-ый опциональный параметр у функции
//если функция получает 'even', то функция возвращает массив чётных чисел
//если функция получает 'odd', то функция возвращает массив нечётных чисел
const mas = [];

function generate(n, m, parametr) {
  var i;
  for (i = n; i < m + n + 1; i++) {
    const number = Math.floor(Math.random() * (m - n)) + n;
    if (number % 2 == 0 && parametr == 'even') {
      mas.push(number);
    } else if (number % 2 != 0 && parametr == 'odd') {
      mas.push(number);
    }
  } 
}

generate(5, 15, 'even');  //если ввести 'odd', в массив попадут нечетные
console.log(mas)
