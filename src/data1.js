import {theList, inputField, sendButton } from './init/index.js'
import {checkedItem, deleteItem} from './handlers/handlers.js'


const createListItem = () => {

// Div for each item

const itemDiv = document.createElement('div');
itemDiv.classList.add('item');
theList.appendChild(itemDiv);

//li for each item

const liItem = document.createElement('li');
liItem.innerText = inputField.value;
liItem.classList.add('li-item');
inputField.value = '';
itemDiv.appendChild(liItem);

// checked button

// const checkedButton = document.createElement('button');
// checkedButton.innerHTML = '<i class = "fas fa-check"></i>';
// checkedButton.classList.add('checked-button');
// itemDiv.appendChild(checkedButton);

// checkedButton.addEventListener('click', (e) console.log => ('e'));

//delete button 

// const deleteButton = document.createElement('button');
// deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
// // deleteButton.setAttribute('id', 'delete-button');
// deleteButton.classList.add('delete-button');
// itemDiv.appendChild(deleteButton);
// //listener for delete button  
// deleteButton.addEventListener('click', deleteItem);
// checkedButton.addEventListener('click', checkedItem);


} 

const sendUrl = () => {

let inputcopy = document.body.appendChild(document.createElement("input"));
inputcopy.value = window.location.href;
inputcopy.focus();
inputcopy.select();
document.execCommand('copy');
inputcopy.parentNode.removeChild(inputcopy);
// sendButton.setAttribute('class', 'send-active'); // re-write class for sendButton, not good idea
sendButton.classList.add('send-active'); // add a new class but doesn't delete the old one. 

}

// debugger;
//delete all items

const deleteAll = () => {
//     const itemsToClean = document.querySelectorAll("li");
//     theList.remove(itemsToClean);
// // console.log("hey");
//  ///// ELIMINAR TODOS LOS DOCUMENTOS ///// 
        theList.innerHTML = ''; 
 
}

export {createListItem, sendUrl, deleteAll}; 


// To store in local storage


