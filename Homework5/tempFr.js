"use strict";

// Не судите строго)

const arr = [
    [2, 4, 6],
    [1, 5, 10],
    [7, 4, 1],
];

let sumArray = 0;
let maxArray = 0;
let indexMaxArray = 0;

for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = arr[i].length - 1; j >= 0; j--) {
        sumArray += arr[i][j];
    }
    if (sumArray > maxArray) {
        indexMaxArray = i;
        maxArray = sumArray;
        sumArray = 0;
    }
    sumArray = 0;
}

let minNumberMaxArray = arr[indexMaxArray][0];

for (let i = arr[indexMaxArray].length - 1; i >= 0; i--) {
    if (minNumberMaxArray > arr[indexMaxArray][i] ) {
        minNumberMaxArray = arr[indexMaxArray][i];
    }
}

console.log(arr);
console.log(`Индекс массива у которого сумма чисел максимальна ${indexMaxArray}`);
console.log(`Минимальное число в этом массиве ${minNumberMaxArray}`);
