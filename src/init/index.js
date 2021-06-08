
// Title

const header = document.createElement('header');
document.body.appendChild(header);
const title = document.createElement('h1');
header.appendChild(title);
title.innerText = 'Shopping List';
console.log(header);
// Div for everything 

const divContainer = document.createElement('div');         
divContainer.setAttribute('id', 'div-container');
divContainer.setAttribute('class', 'container')
console.log(divContainer);

// add div container inside the body in html

document.body.appendChild(divContainer);

// create div for input 

const divInput = document.createElement('div');
divInput.setAttribute('id', 'input-field');
divInput.setAttribute('class', 'input-container')
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

// create div to see the display list

const divList = document.createElement('div');
divList.setAttribute('id', 'list-field');
divList.setAttribute('class', 'list-container');
divContainer.appendChild(divList);

const theList = document.createElement('ul');
theList.setAttribute('id', 'the-list');
divList.appendChild(theList);


export {
theList, inputField
};