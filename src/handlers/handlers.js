import { createListItem, sendUrl, deleteAll } from '../data.js'

// control list through buttons 

const buttonControl = (event) => {


    event.preventDefault();

const text = event.target.form.text.value; // input field
const action = event.target.value;

// add item to the list 

if (action === "add") {
  createListItem(); 

} 
// copy shopping list URL 
if (action === 'send') {
  sendUrl();
}
// save? where we can save? local storage?

if (action === 'save') {

    console.log('save');
}

//clean all items from shopping list 

if (action === 'clean') {
  deleteAll();

}

}

//function to delete item from shopping list

const deleteItem = (event) => {
    const item = event.target;
    if(item.classList[0] === 'delete-button') {
    const delItem = item.parentElement;
    delItem.remove();
    // console.log(event);
    } 
     
}

// function to checked item from shopping list 

const checkedItem =(event) => {
    const checked = event.target;    
    if (checked.classList[0] === 'checked-button') {
      const checkItem = checked.parentElement;
      checkItem.classList.toggle('completed');
      // console.log(event);
    }
}



// 


export {buttonControl, deleteItem, checkedItem};