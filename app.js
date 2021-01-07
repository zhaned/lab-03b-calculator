// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM
const firstInput = document.getElementById('input-1');
const secondInput = document.getElementById('input-2');
const addButton = document.getElementById('add-button');
const subButton = document.getElementById('sub-button');
const multButton = document.getElementById('mult-button');
const divButton = document.getElementById('div-button');
const addedInputs = document.getElementById('added-inputs');
// console.log(welcomeElement);

// Add a button that chanes the style and text content
addButton.addEventListener('click', () => {
    const fieldOne = Number(firstInput.value);
    const fieldTwo = Number(secondInput.value);
    const results = fieldOne + fieldTwo;

    addedInputs.textContent = results;
});

subButton.addEventListener('click', () => {
    const fieldOne = Number(firstInput.value);
    const fieldTwo = Number(secondInput.value);
    const results = fieldOne - fieldTwo;

    addedInputs.textContent = results;
});

multButton.addEventListener('click', () => {
    const fieldOne = Number(firstInput.value);
    const fieldTwo = Number(secondInput.value);
    const results = fieldOne * fieldTwo;

    addedInputs.textContent = results;
});

divButton.addEventListener('click', () => {
    const fieldOne = Number(firstInput.value);
    const fieldTwo = Number(secondInput.value);
    const results = fieldOne / fieldTwo;

    addedInputs.textContent = results;
});