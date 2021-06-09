import {theList, inputField } from '../init/index.js'

// control list through buttons 

const buttonControl = (event) => {


    event.preventDefault();

const text = event.target.form.text.value;
const action = event.target.value;

if (action === "add") {

// console.log('hey'); 

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

//delete button 

const deleteButton = document.createElement('button');
deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
// deleteButton.setAttribute('id', 'delete-button');
deleteButton.classList.add('delete-button');
itemDiv.appendChild(deleteButton);
deleteButton.addEventListener('click', deleteItem);

} 

// send 

if (action === 'send') {

    console.log('send');

}

// save

if (action === 'save') {

    console.log('save');

}


//clean 

if (action === 'clean') {

    console.log('clean');

}

}





const deleteItem = (event) => {
    
    const item = event.target;

    // delete item
    if(item.classList[0] === 'delete-button') {
    const delItem = item.parentElement;
    delItem.remove();
    
    // console.log(event); 

}
    
}


export {buttonControl, deleteItem}
