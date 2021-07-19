import { handleAddItem } from "./handleAddItem.js";

const buttonControl = (event) => {

const action = event.target.value;
event.preventDefault();

if (action === "add") {
    handleAddItem();

};

if (action === "copy-url") {
console.log("copy url");
};

if (action === 'clean') {
console.log("clean")

};

};

export { buttonControl };

// //function to delete item from shopping list

// const deleteItem = (event) => {
//     const item = event.target;
//     if(item.classList[0] === 'delete-button') {
//     const delItem = item.parentElement;
//     delItem.remove();
//     // console.log(event);
//     } 
     
// }

// // function to checked item from shopping list 

// const checkedItem =(event) => {
//     const checked = event.target;    
//     if (checked.classList[0] === 'checked-button') {
//       const checkItem = checked.parentElement;
//       checkItem.classList.toggle('completed');
//       // console.log(event);
//     }
// }



// // 


// export {buttonControl, deleteItem, checkedItem};