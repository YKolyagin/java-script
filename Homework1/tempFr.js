"use strict";

let tempTc = prompt("Введите температуру в градусах Цельсия:");
if (tempTc !== "") {
    alert(`Температура в градусах Фаренгейта: ${Math.floor((9 / 5) * +tempTc + 32)}`);
} else {
    alert("Вы забыли ввести температуру!");
}