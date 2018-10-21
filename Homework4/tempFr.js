"use strict";

const a = +prompt("Введите первое число А.");
const b = +prompt("Введите первое число B.");

function sum(a, b) {
    return a + b
}

alert(`Сумма ${sum(a, b)}`);

function diff(a, b) {
    return a - b
}

alert(`Разность ${diff(a, b)}`);

function division(a, b) {
    return a / b
}

alert(`Деление ${division(a, b)}`);

function product(a, b) {
    return a * b
}

alert(`Произведение ${product(a, b)}`);