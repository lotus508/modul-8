"use strict";
//Третья задача:
//Добавьте 4-ый опциональный параметр у функции
//если функция получает 'even', то функция возвращает массив чётных чисел
//если функция получает 'odd', то функция возвращает массив нечётных чисел
const mas = [];

function generate(aa, n, m, tt) {
  var i;
  for (i = 0; i < m; i++) {
    mas.push(Math.floor(Math.random() * m) + n)
  } 
}

generate(100, 5, 12, 'even');
console.log(mas)