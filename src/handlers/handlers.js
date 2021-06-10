import { createListItem, sendUrl } from '../data.js'

// control list through buttons 

const buttonControl = (event) => {


    event.preventDefault();

const text = event.target.form.text.value; // input field
const action = event.target.value;

if (action === "add") {
//   console.log(createListItem); 
  createListItem(); 

} 
// copy URLS 
if (action === 'send') {
  
  sendUrl();
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

export { buttonControl, deleteItem }
