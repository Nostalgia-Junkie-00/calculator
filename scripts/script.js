//Get elements
const display = document.querySelector('.display');
const numButtons = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operation');
const equals = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

//Variables
let value = '';
let operation = '';
let a = 0;
let b = 0;

//Show numbers on display
numButtons.forEach(number => {
    number.addEventListener('click', () => {
        value += number.innerText;
        display.innerText = value;
    })
})
//Create functions for simple math operations.
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
//Create operate function that takes in an operator and 2 numbers that call the math operations.
function operate(operator, a, b){
    switch(operator) {
        case ('add'):
            return add(a, b);
            break
        case 'subtract':
            return subtract(a, b);
            break
        case 'multiply':
            return multiply(a, b);
            break
        case 'divide':
            return divide(a, b);
            break
        default:
            return "hello"
    }
}
//Get operators from buttons
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        a = parseInt(value);
        operation = operator.id;
        value += operator.innerText;
        display.innerText = value;
    })
})
//Solve equation
function solve(){
    b = parseInt(value.split(/[+*\/-]/g)[1]);
    display.innerText = operate(operation, a, b);
}

equals.addEventListener('click', solve);
//Clear
function clear(){
    value = '';
    operation = '';
    a = 0;
    b = 0;
    display.innerText = value;
}

clearButton.addEventListener('click', clear);
