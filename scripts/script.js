//Get elements
const display = document.querySelector('.display');
const numButtons = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operation');
const equals = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

//Variables
let equation = '';

//Show numbers on display
numButtons.forEach(number => {
    number.addEventListener('click', () => {
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
        case '+':
            return add(a, b);
            break
        case '-':
            return subtract(a, b);
            break
        case '*':
            return multiply(a, b);
            break
        case '/':
            return divide(a, b);
            break
        default:
            return "Not an operator"
    }
}
//Get operators from buttons
operators.forEach(operator => {
    operator.addEventListener('click', () => {
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
        display.innerText = equation;    
    })
})
//Solve equation
function solve(){
    let index = equation.search(/[+*\/-]/g)
    let operation = equation.substring(index, index + 1);
    let [a, b] = equation.split(operation);
    display.textContent = operate(operation, parseInt(a), parseInt(b));

}

equals.addEventListener('click', solve);
//Clear
function clear(){
    equation = '';
    display.innerText = equation;
}

clearButton.addEventListener('click', clear);
