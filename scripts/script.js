const solve = document.querySelector('.equate')
const numbers = document.querySelectorAll('.num');
let value = '';
const store = [];

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        value += number.innerText;
        solve.innerText = parseInt(value); 
    })
})

//Clear the display
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    value = '';
    solve.innerText = '';
})