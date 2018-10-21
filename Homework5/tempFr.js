"use strict";

const arg1 = +prompt("Введите первое число.");
const arg2 = +prompt("Введите второе число.");
const operation = prompt("Введите действие с числами 'Сумма' 'Разность' 'Умножение' 'Деление'");

/**
 * @function [number] - Функция возвращает результат действия с двумя числами в зависиммости от ввода пользователя.
 * @param (a) [number] - Первое число которое вводит пользователь.
 * @param (b) [number] - Второе число которое вводит пользователь.
 * @param (c) [strict] - Действие которое вводит пользователь. ('Сумма' 'Разность' 'Умножение' 'Деление')
 * @returns [number] - результат математической операции с числами.
 */

// Я правильно пони

function mathOperation(a, b, c) {
    switch (c) {
        case 'Сумма':
            alert(`Сумма равна: ${a + b}`);
            break;
        case 'Разность':
            alert(`Разность равна: ${a - b}`);
            break;
        case 'Умножение':
            alert(`Умножение равно: ${a * b}`);
            break;
        case 'Деление':
            alert(`Умножение равно: ${a / b}`);
            break;
    }
}

mathOperation(arg1, arg2, operation);


// Второй вариант решения

/*
function sum(arg1, arg2) {
    return arg1 + arg2
}

function diff(arg1, arg2) {
    return arg1 - arg2
}

function division(arg1, arg2) {
    return arg1 / arg2
}

function product(arg1, arg2) {
    return arg1 * arg2
}

switch (operation) {
    case 'Сумма':
        alert(`Сумма равна: ${sum(arg1, arg2)}`);
        break;
    case 'Разность':
        alert(`Разность равна: ${diff(arg1, arg2)}`);
        break;
    case 'Умножение':
        alert(`Умножение равно: ${product(arg1, arg2)}`);
        break;
    case 'Деление':
        alert(`Умножение равно: ${division(arg1, arg2)}`);
        break;
}
*/
