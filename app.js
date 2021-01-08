// import functions and grab DOM elements
import { addHandler, subHandler, multHandler, divHandler } from './handler.js';
// initialize state
const addButton = document.getElementById('add-button');
const subButton = document.getElementById('sub-button');
const multButton = document.getElementById('mult-button');
const divButton = document.getElementById('div-button');
// set event listeners to update state and DOM
// console.log(welcomeElement);
// Add a button that chanes the style and text content
addButton.addEventListener('click', addHandler);
subButton.addEventListener('click', subHandler);
multButton.addEventListener('click', multHandler);
divButton.addEventListener('click', divHandler);
