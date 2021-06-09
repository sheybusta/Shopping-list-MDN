
// Title

const header = document.createElement('header');
document.body.appendChild(header);
const title = document.createElement('h1');
header.appendChild(title);
title.innerText = 'My Shopping List';
console.log(header);
// Div for everything 

const divContainer = document.createElement('div');         
divContainer.setAttribute('id', 'div-container');
divContainer.setAttribute('class', 'container')
console.log(divContainer);

// add div container inside the body in html

document.body.appendChild(divContainer);

// create div for input 

const divInput = document.createElement('form');
divInput.setAttribute('id', 'input-field');
divInput.setAttribute('class', 'input-container')
divContainer.appendChild(divInput);


// create input field inside div

const inputField = document.createElement('input');
inputField.setAttribute('type', 'text');
inputField.setAttribute('name', 'text');
inputField.setAttribute('id', 'input-field')
divInput.appendChild(inputField);



// create add button

const addButton = document.createElement('button');
addButton.setAttribute('id', 'add-button');
addButton.setAttribute('class', 'add-btn');
addButton.setAttribute('value', 'add');
addButton.textContent = 'ADD';
divInput.appendChild(addButton);

// create div to see the display list

const divList = document.createElement('div');
divList.setAttribute('id', 'list-field');
divList.setAttribute('class', 'list-container');
divContainer.appendChild(divList);

const theList = document.createElement('ul');
theList.setAttribute('id', 'the-list');
divList.appendChild(theList);

// create send button
const sendButton = document.createElement('button');
sendButton.setAttribute('id', 'send-button');
sendButton.setAttribute('class', 'send-btn');
sendButton.setAttribute('value', 'send');
sendButton.textContent = 'SEND';
divInput.appendChild(sendButton);

// create save button

const saveButton = document.createElement('button');
saveButton.setAttribute('id', 'save-button');
saveButton.setAttribute('class', 'save-btn');
saveButton.setAttribute('value', 'save');
saveButton.textContent = 'SAVE';
divInput.appendChild(saveButton);

// create clean button 

const cleanButton = document.createElement('button');
cleanButton.setAttribute('id', 'clean-button');
cleanButton.setAttribute('class', 'clean-btn');
cleanButton.setAttribute('value', 'clean');
cleanButton.textContent = 'CLEAN';
divInput.appendChild(cleanButton);

export {
theList, inputField, addButton, sendButton, saveButton, cleanButton
};