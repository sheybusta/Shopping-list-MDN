import {theList, inputField } from '../init/index.js'
const addItemHandler = (event) => {

    event.preventDefault();

// console.log('hey'); 

//Div for each item
const itemDiv = document.createElement('div');
itemDiv.classList.add('item');
theList.appendChild(itemDiv);

//li for each item

const listItem = document.createElement('li');
listItem.innerText = inputField.value;
listItem.classList.add('list-item');
inputField.value = '';
itemDiv.appendChild(listItem);

//completed button 

const deleteButton = document.createElement('button');
deleteButton.innerHTML = '<i class = "fas fa-trash"></i>'
deleteButton.classList.add('delete-button');
itemDiv.appendChild(deleteButton);

}


export {addItemHandler}