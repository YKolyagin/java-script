"use strict";

const deposit = +prompt(`Введите сумму вклада.`);
const arrRub = ["рубль", "рублей", "рубля"];

// второй вариант решения.
/*
if (20 < (deposit % 100) < 10) {
    alert(declination(deposit, arrRub));
} else {
    alert(`Ващ вклад ${deposit} ${arrRub[2]}`);
}

function declination(a, b) {
        switch (a % 10) {
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                return `Ващ вклад ${a} ${b[1]}`;
            case 2:
            case 3:
                return `Ващ вклад ${a} ${b[2]}`;
            case 1:
                return `Ващ вклад ${a} ${b[0]}`;
        }
}*/

function declination(a, b) {
    if (a % 100 < 10 || a % 100 > 20) {
        switch (a % 10) {
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                return `Ващ вклад ${a} ${b[1]}`;
            case 2:
            case 3:
            case 4:
                return `Ващ вклад ${a} ${b[2]}`;
            case 1:
                return `Ващ вклад ${a} ${b[0]}`;
        }
    } else {
        return `Ващ вклад ${a} ${b[1]}`;
    }
}

alert(declination(deposit, arrRub));