"use strict";

let tickets = prompt("Введите ваш номер билета:");
if (+tickets.length === 6) {
    let sumRight = +tickets % 10 + Math.floor(+tickets/10) % 10 + Math.floor(+tickets/100) % 10;
    let sumLeft = Math.floor(+tickets/1000) % 10 + Math.floor(+tickets/10000) % 10 + Math.floor(+tickets/100000) % 10;
    if (sumLeft === sumRight) {
        alert("У вас счастливый билет!")
    }
      else {
          alert("Вам не повезло с билетом!")
    }
}
  else {
    alert("Какой-то не правильный у вас билет!");
}


