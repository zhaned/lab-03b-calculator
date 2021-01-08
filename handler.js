import { addition, subtraction, multiply, division } from './utils.js';

const firstInput = document.getElementById('input-1');
const secondInput = document.getElementById('input-2');
const output = document.getElementById('merged-inputs');

export function addHandler() {
    const fieldOne = Number(firstInput.value);
    const fieldTwo = Number(secondInput.value);
    output.textContent = addition(fieldOne, fieldTwo);
}

export function subHandler() {
    const fieldOne = Number(firstInput.value);
    const fieldTwo = Number(secondInput.value);
    output.textContent = subtraction(fieldOne, fieldTwo);
}

export function multHandler() {
    const fieldOne = Number(firstInput.value);
    const fieldTwo = Number(secondInput.value);
    output.textContent = multiply(fieldOne, fieldTwo);
}

export function divHandler() {
    const fieldOne = Number(firstInput.value);
    const fieldTwo = Number(secondInput.value);
    output.textContent = division(fieldOne, fieldTwo);
}
