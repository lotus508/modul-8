"use strict";
//Вторая  задача:
//Функция принимает еще два параметра n и m
//Числа m и n формируют диапазон, в пределах которого должно сгенерироваться 
//числа для массива m и n включительно
//Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
const mas = [];

function generate(n, m) {
  var i;
  for (i = 0; i < m; i++) {
    mas.push(Math.floor(Math.random() * m) + n)
  } 
}

generate(-5, 5);
console.log(mas)