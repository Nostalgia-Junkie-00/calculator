//Get elements
const display = document.querySelector('.display');
const numButtons = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operation');
const equals = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

//Variables
let equation = '';
let operation = '';
let action = false;
let a = 0;
let b = 0;

//Show numbers on display
numButtons.forEach(number => {
    number.addEventListener('click', () => {
        if(action === true){
            action = false;
        }
        equation += number.innerText;
        display.innerText = equation;     
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
        case 'add':
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
            return "Not an operator"
    }
}
//Get operands from equation

//Get operators from buttons
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (equation === ''){
            console.log('No values entered');
        }else if(action === true){
            console.log('Cannot perform another operation');
        }else {
            //If b exist, solve the problem first
            if(equation.split(/[+*\/-]/g)[1] !== undefined){
                solve();
            }
            a = parseInt(equation);
            operation = operator.id;
            switch(operation) {
                case ('add'):
                    equation+= '+';
                    break
                case 'subtract':
                    equation+= '-';
                    break
                case 'multiply':
                    equation+= '*';
                    break
                case 'divide':
                    equation+= '/';
                    break
                default:
                    return "Not an operator"
            }
            action = true;
            display.innerText = equation; 
        }  
    })
})
//Solve equation
function solve(){
    b = parseInt(equation.split(/[+*\/-]/g)[1]);
    equation = operate(operation, a, b);
    display.innerText = equation;
}

equals.addEventListener('click', solve);
//Clear
function clear(){
    equation = '';
    operation = '';
    action = false;
    a = 0;
    b = 0;
    display.innerText = equation;
}

clearButton.addEventListener('click', clear);
