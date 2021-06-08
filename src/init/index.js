import "../listeners/listener.js"

// Div for everything 

const divContainer = document.createElement('div');
divContainer.setAttribute('id', 'div-container');
console.log(divContainer);

// add div container inside the body in html

document.body.appendChild(divContainer);

// create div for input 

const divInput = document.createElement('div');
divInput.setAttribute('id', 'input-field');
divContainer.appendChild(divInput);


// create input field inside div

const inputField = document.createElement('input');
inputField.setAttribute('type', 'text');
divInput.appendChild(inputField);



// create add button

const buttonAdd = document.createElement('button');
buttonAdd.setAttribute('id', 'btn-add');
buttonAdd.setAttribute('class', 'btn');
buttonAdd.textContent = "add item";
divInput.appendChild(buttonAdd);



